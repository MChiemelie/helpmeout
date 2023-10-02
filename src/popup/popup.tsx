import React, { useState, useRef } from "react";
import RecordRTC from "recordrtc";
import './popup.css';

export default function Popup() {
    const [recording, setRecording] = useState(false);
    const [mediaStream, setMediaStream] = useState(null);
    const [recordedBlob, setRecordedBlob] = useState(null);
    const mediaRecorderRef = useRef(null);

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getDisplayMedia({ video: true });
            setMediaStream(stream);
            const recorder = new RecordRTC(stream, {
                type: "video",
                mimeType: "video/webm",
            });
            recorder.startRecording();
            mediaRecorderRef.current = recorder;
            setRecording(true);
        } catch (error) {
            console.error("Error starting recording:", error);
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) {
            mediaRecorderRef.current.stopRecording(() => {
                setRecordedBlob(mediaRecorderRef.current.getBlob());
                setRecording(false);
            });
        }
    };

    const downloadRecording = () => {
        if (recordedBlob) {
            const formData = new FormData();
            formData.append("video", recordedBlob, "screen_recording.webm");

            fetch("https://damisaalex.xyz/hngx5/api/videos", {
                method: "POST",
                body: formData,
            })
                .then((response) => {
                    if (response.ok) {
                        console.log("Video uploaded successfully!");
                    } else {
                        console.error("Failed to upload video");
                    }
                })
                .catch((error) => {
                    console.error("Error while uploading video:", error);
                });
        }
    };

    return (
        <div className="rounded-lg p-8">
            <div className="space-y-6">
                <nav className="flex justify-between">
                    <div className="flex items-center gap-1 text-base font-bold">
                        <img src="logo.svg" alt="" className="h-8" />
                        HelpMeOut
                    </div>
                    <div className="flex items-center gap-3">
                        <img src="settingpopup.svg" alt="" />
                        <img src="closepopup.svg" />
                    </div>
                </nav>
                <p className="text-sm">This extension helps you record and share help videos with ease.</p>
                <div className="flex justify-evenly">
                    <button
                        className="flex flex-col items-center font-bold text-[#120B48] text-sm"
                        onClick={() => {
                            const element = document.documentElement;
                            if (element.requestFullscreen) {
                                element.requestFullscreen();
                            }
                        }}
                    >
                        <img src="screen.svg" />
                        Full Screen
                    </button>
                    <button
                        className="flex flex-col items-center font-bold text-[#120B48] text-sm"
                        onClick={() => {
                            if (chrome && chrome.tabs) {
                                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                                    const currentTab = tabs[0];
                                });
                            }
                        }}
                    >
                        <img src="tab.svg" />
                        Current Tab
                    </button>
                </div>
                <div className="space-y-6">
                    <div className="flex justify-between border border-[#120B48] rounded-xl items-center p-3">
                        <div className="flex items-center gap-2 text-base text-[#120B48] font-medium">
                            <img src="camera.svg" />
                            Camera
                        </div>
                        <button className="flex w-9 h-5 items-center shrink-0 py-2 px-0 rounded-xl bg-[#120B48]  justify-end">
                            <img src="toogle.svg" />
                        </button>
                    </div>
                    <div className="flex justify-between border border-[#120B48] rounded-xl items-center p-3">
                        <div className="flex items-center gap-2 text-base text-[#120B48] font-medium">
                            <img src="audio.svg" />
                            Audio
                        </div>
                        <button className="flex w-9 h-5 items-center shrink-0 py-2 px-0 rounded-xl bg-[#120B48]  justify-end">
                            <img src="toogle.svg" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-evenly">
                    {recording ? (
                        <button className="bg-red-500 text-white text-base w-full rounded-xl p-3" onClick={stopRecording}>
                            Stop Recording
                        </button>
                    ) : (
                        <button className="bg-[#120B48] text-white text-base w-full rounded-xl p-3" onClick={startRecording}>
                            Start Recording
                        </button>
                    )}
                </div>
                {recordedBlob && (
                    <div>
                        <button className="bg-[#120B48] text-white text-base w-full rounded-xl p-3" onClick={downloadRecording}>
                            Download Recording
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};


