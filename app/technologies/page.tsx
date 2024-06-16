import Technologies from "@/components/technologies";

export default function Tech() {
  return (
    <div className="flex justify-center w-full max-w-2xl mx-auto p-6">
      <div>
        <div className="flex flex-col items-center mt-10">
          <div className="text-4xl font-bold text-center">Technologies</div>
          <p className="font-thin">
            Click on an icon to see projects using that technology.
          </p>
        </div>
        <Technologies liveLinks={true} />
      </div>
    </div>
  );
}
