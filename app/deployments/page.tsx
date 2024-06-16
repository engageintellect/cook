import { FadeIn } from "@/components/magicui/fade-in";
import BlurIn from "@/components/magicui/blur-in";
import Globe from "@/components/magicui/globe";

export default async function DeploymentsPage() {
  return (
    <div className="mt-10 w-full max-w-2xl mx-auto px-6">
      <BlurIn duration={0.5}>
        <FadeIn direction="up">
          <div className="flex flex-col items-start">
            <div className="text-4xl font-bold text-center">Deployments</div>
            <div className="font-thin">
              Click on a deployment to see the project.
            </div>
          </div>
        </FadeIn>
      </BlurIn>

      <BlurIn duration={0.5}>
        <FadeIn direction="down">
          <section className="mt-10">
            <div className="text-2xl font-bold">Cloud</div>

            <div>
              Cloud deployments are the most common way to deploy a project.
              They are easy to set up and maintain, and are generally more
              secure than other deployment methods. Cloud deployments are also
              scalable, meaning that you can easily add more resources to your
              project as it grows. Some popular cloud deployment platforms
              include AWS, Google Cloud, and Azure.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">Edge</div>

            <div>
              Lorem sint est ipsum excepteur in Lorem occaecat labore
              exercitation laboris minim ea. Proident eu consectetur commodo
              laborum elit voluptate et adipisicing incididunt amet laboris do.
              Pariatur consectetur dolor aliqua labore. Sunt et exercitation
              fugiat ullamco non mollit dolor ullamco.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">On-Prem</div>

            <div>
              Lorem sint est ipsum excepteur in Lorem occaecat labore
              exercitation laboris minim ea. Proident eu consectetur commodo
              laborum elit voluptate et adipisicing incididunt amet laboris do.
              Pariatur consectetur dolor aliqua labore. Sunt et exercitation
              fugiat ullamco non mollit dolor ullamco.
            </div>
          </section>
        </FadeIn>
      </BlurIn>
    </div>
  );
}
