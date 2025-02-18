import { title, subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import HeartIcon from "@/components/home/home-media";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>Make it &nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            Welcome to dorna
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern web development.
          </div>
          <div>
          <HeartIcon/>
          </div>

        </div>
      </section>
    </DefaultLayout>
  );
}
