import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { motion } from "framer-motion";

export default function Orbit() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
        className="relative flex h-full w-full items-center justify-center"
      >
        {/* Center Icon */}
        <OrbitingCircles radius={10} duration={20} path={false} iconSize={25}>
          <img src="https://cdn.simpleicons.org/github/white" alt="GitHub" className="w-full h-full" />
        </OrbitingCircles>

        {/* Inner Ring - 3 icons spread out */}
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={false} startAngle={120}>
          <img src="https://cdn.simpleicons.org/svelte/FF3E00" alt="Svelte" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={false} startAngle={240}>
          <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" className="w-full h-full" />
        </OrbitingCircles>

        {/* Middle Ring (reverse) - 4 icons spread out */}
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/vercel/white" alt="Vercel" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={90}>
          <img src="https://cdn.simpleicons.org/ubuntu/E95420" alt="Ubuntu" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={180}>
          <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={270}>
          <img src="https://cdn.simpleicons.org/nginx/009639" alt="Nginx" className="w-full h-full" />
        </OrbitingCircles>

        {/* Outer Ring - 4 icons spread out */}
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/fastapi/009688" alt="FastAPI" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={90}>
          <img src="https://cdn.simpleicons.org/openai/412991" alt="OpenAI" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={180}>
          <img src="https://cdn.simpleicons.org/pocketbase/B8DBE4" alt="Pocketbase" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={270}>
          <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="w-full h-full" />
        </OrbitingCircles>
      </motion.div>
    </div>
  );
}
