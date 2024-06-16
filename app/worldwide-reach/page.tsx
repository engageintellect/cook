import { FadeIn } from "@/components/magicui/fade-in";
import BlurIn from "@/components/magicui/blur-in";

export default async function WorldwideReach() {
  return (
    <div className="mt-10 w-full max-w-2xl mx-auto px-6">
      <BlurIn duration={0.5}>
        <FadeIn direction="up">
          <div className="flex flex-col items-start">
            <div className="text-4xl font-bold text-center">
              Worldwide Reach
            </div>
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
              include AWS, Google Cloud, and Azure.
            </div>

            <ul className="list-disc ml-10 mt-2">
              <li>Vercel</li>
              <li>AWS</li>
              <li>Azure</li>
              <li>Docker</li>
              <li>Linode</li>
              <li>Digital Ocean</li>
            </ul>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">Edge</div>

            <div>
              Edge deployments leverage distributed computing to bring data and
              services closer to users, reducing latency and improving response
              times. This approach is particularly beneficial for real-time
              applications and services that require rapid data processing and
              delivery. By minimizing the distance data travels, edge
              deployments enhance user experience and can also reduce bandwidth
              costs.
            </div>
          </section>

          <section className="mt-5">
            <div className="text-2xl font-bold">On-Prem</div>

            <div>
              On-premises deployments are hosted locally on a company&apos;s own
              servers and infrastructure. This approach provides organizations
              with greater control over their data and applications, enabling
              them to meet specific security and compliance requirements. While
              on-premises deployments offer enhanced security and privacy, they
              require significant resources to maintain and manage, making them
              less flexible and scalable than cloud or edge deployments.
            </div>
          </section>
        </FadeIn>
      </BlurIn>
    </div>
  );
}
