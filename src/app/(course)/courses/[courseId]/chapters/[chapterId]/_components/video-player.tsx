"use client";

import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

import { cn } from "@/lib/utils";
import Confetti from 'react-confetti';

interface VideoPLayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string
};

export const VideoPlayer = ({
  playbackId,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPLayerProps) => {
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="relative aspect-video">
      {!isLocked && !isReady && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800"> 
          <Loader2 className="h-8 w-8 animate-spin text-secondary" />
        </div>
      )}
      
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary"> 
          <Lock className="h-8 w-8" />
          <p>This chapter is locked</p>
        </div>
      )}
      {!isLocked && (
        // <MuxPlayer title={title}  
        // onCanPlay={() => setIsReady(true)} 
        // onEnded={() => {}}
        // autoPlay
        // playbackId={playbackId}
        // className={cn( !isReady && "hidden" )} 
        // />
        <MuxPlayer
          playbackId={playbackId}
          metadata={{
            video_id: "video-id-54321",
            video_title: {title}  ,
            viewer_user_id: "user-id-007",
          }}
        />
      )}
    </div>
  )
}