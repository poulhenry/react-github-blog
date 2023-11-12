import { useQuery } from "@tanstack/react-query";
import { ArrowUpRightSquare, Building, Github, Users2 } from "lucide-react";
import { api } from "../../services/api";

interface UserProfileProps {
  avatarUrl: string
  name: string
  login: string
  followers: string
}

export function UserProfile({name, avatarUrl, followers, login}: UserProfileProps) {
  return (
    <div className="w-full h-52 -mt-20 px-10 py-8 bg-base-profile rounded-xl shadow-2xl">
      <div className="flex items-center relative">
        <div className="w-40 h-[148px] mr-8 rounded-lg overflow-hidden">
          <img className="w-full h-full" src={avatarUrl} alt="" />
        </div>

        <a href="#" className="absolute top-8 right-0 z-20 flex items-center gap-1 text-xs font-bold uppercase text-brand hover:underline">GITHUB <ArrowUpRightSquare size={12} /></a>

        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-base-title mb-2">{name}</h1>

          <p className="text-base text-base-text mb-6">Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <div className="flex items-center justify-start gap-6">

            <span className="flex items-center gap-2 text-base-subtitle"><Github size={18} color="#3A536B" /> {login}</span>

            <span className="flex items-center gap-2 text-base-subtitle"><Building size={18} color="#3A536B" /> SKY Brazil</span>

            <span className="flex items-center gap-2 text-base-subtitle"><Users2 size={18} color="#3A536B" /> {followers} seguidores</span>
          </div>
        </div>
      </div>
    </div>
  )
}