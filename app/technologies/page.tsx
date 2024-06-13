import Technologies from "@/components/technologies";

export default function Tech() {
  return (
    <div className=" flex items-center justify-center w-full max-w-3xl mx-auto p-6 h-screen">
      <div>
        <div className="flex flex-col items-start">
          <div className="text-4xl font-bold text-center">Technologies</div>
          <p>Click on an icon to see projects using that technology.</p>
        </div>
        <Technologies />
      </div>
    </div>
  );
}
