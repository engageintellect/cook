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
          <img src="https://cdn.simpleicons.org/github" alt="GitHub" className="w-full h-full" />
        </OrbitingCircles>

        {/* Inner Ring - 3 icons spread out */}
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/python" alt="Python" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={false} startAngle={120}>
          <img src="https://cdn.simpleicons.org/svelte" alt="Svelte" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={50} duration={20} iconSize={30} path={false} startAngle={240}>
          <img src="https://cdn.simpleicons.org/typescript" alt="TypeScript" className="w-full h-full" />
        </OrbitingCircles>

        {/* Middle Ring (reverse) - 4 icons spread out */}
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/vercel" alt="Vercel" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={90}>
          <img src="https://cdn.simpleicons.org/ubuntu" alt="Ubuntu" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={180}>
          <img src="https://cdn.simpleicons.org/docker" alt="Docker" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={100} duration={20} reverse iconSize={35} path={false} startAngle={270}>
          <img src="https://cdn.simpleicons.org/nginx" alt="Nginx" className="w-full h-full" />
        </OrbitingCircles>

        {/* Outer Ring - 4 icons spread out */}
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={true} startAngle={0}>
          <img src="https://cdn.simpleicons.org/fastapi" alt="FastAPI" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={90}>
          <img src="https://cdn.simpleicons.org/openai" alt="OpenAI" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={180}>
          <img src="https://cdn.simpleicons.org/pocketbase" alt="Pocketbase" className="w-full h-full" />
        </OrbitingCircles>
        <OrbitingCircles radius={150} duration={40} iconSize={40} path={false} startAngle={270}>
          <img src="https://cdn.simpleicons.org/react" alt="React" className="w-full h-full" />
        </OrbitingCircles>
      </motion.div>
    </div>
  );
}
