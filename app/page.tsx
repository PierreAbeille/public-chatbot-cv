import Image from "next/image";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { VisitCard } from "./components/visit-card";
import { ChatBot } from "./components/chatbot";
import { BadgesRow } from "./components/badges-row";
import { CallToActions } from "./components/call-to-actions";
import { MyFooter } from "./components/footer";

export default function Home() {
  return (
    <main className="app bg-creme-cv min-h-fit">
      <div
        className="main-content 
               max-w-screen 
               h-screen
               flex flex-col xl:grid xl:grid-cols-[minmax(300px,50%)_auto] 
               xl:h-screen 
               p-1 sm:p-4 md:p-10 
               gap-1 sm:gap-8 xl:gap-16 
               relative"
      >
        {/* 🏆 Partie gauche : Scrollable uniquement si besoin */}
        <div
          className="profile-side-management 
                    xl:max-h-screen xl:overflow-y-auto"
        >
          <BackgroundGradient
            className="backgroundGradient bg-slate-50 rounded-[22px] max-w-full p-6 z-30 hidden lg:block"
            containerClassName="max-w-full hidden lg:block z-30 mb-4 xl:mb-10"
          >
            <VisitCard />
          </BackgroundGradient>
          <div className="md-visit-card block lg:hidden mb-2">
            <VisitCard />
          </div>
          <BadgesRow />
          <div className="hidden xl:block max-w-full">
            <CallToActions />
          </div>
          {/* 📌 Footer - affiché différemment selon la taille */}
          <div className="hidden xl:block w-full">
            <MyFooter />
          </div>
        </div>

        {/* 💬 Partie droite : Fixe, prend toute la hauteur */}
        <div
          className="chatbot-cv 
                 flex-grow 
                 min-w-full
                 max-h-screen sticky top-0
                 xl:border-green-cv xl:rounded-[22px] xl:border-4 
                 xl:p-2 
                 overflow-y-auto
                 z-20"
        >
          <ChatBot />
        </div>
      </div>

      <div className="xl:hidden block max-w-screen sm:px-10">
        <CallToActions />
        <MyFooter />
      </div>
    </main>
  );
}