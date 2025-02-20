import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import Resume from "@/components/home/home-media";
import {Divider} from "@heroui/react";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>
            Welcome to Baka.me land<br />
          </span>
          <span className={title()}>Land of &nbsp;</span>
          <span className={title({ color: "violet" })}>Possibilities&nbsp;</span>
          <br />
          <div>
            Beautiful, fast and modern web development.
          </div>
          <div>
          <Divider className="my-4" />
          <span className={subtitle()}>Resume</span>
          <Resume/>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}
