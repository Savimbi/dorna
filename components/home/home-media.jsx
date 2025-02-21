import React from "react";
import {
  Listbox,
  Chip,
  ListboxItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Button,
  Link,
  Accordion,
  AccordionItem,
} from "@heroui/react";
import { BeakerIcon } from "@heroicons/react/24/solid";

export default function Resume() {
  const contentSRE = (
    <PopoverContent>
      <ListboxWrapper>
        <Listbox aria-label="Actions">
          <ListboxItem key="new">CI/CD(GitLab CD)</ListboxItem>
          <ListboxItem key="copy">IaC(Ansible)</ListboxItem>
          <ListboxItem key="edit">Incidents mgnt.</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </PopoverContent>
  );
  const contentSWE = (
    <PopoverContent>
      <ListboxWrapper>
        <Listbox aria-label="Actions">
          <ListboxItem key="new">Frontend(React, Bootstrap)</ListboxItem>
          <ListboxItem key="copy">Backend(Django)</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </PopoverContent>
  );
  const contentDevops = (
    <PopoverContent>
      <ListboxWrapper>
        <Listbox aria-label="Actions">
          <ListboxItem key="new">CI/CD-(Git Action, Jenkins, K8s)</ListboxItem>
          <ListboxItem key="copy">IaC(Terraform, Ansible)</ListboxItem>
          <ListboxItem key="edit">PagerDuty</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </PopoverContent>
  );
  const contentSE = (
    <PopoverContent>
      <ListboxWrapper>
        <Listbox aria-label="Actions">
          <ListboxItem key="new">Linux, Unix</ListboxItem>
          <ListboxItem key="copy">Ms Servers</ListboxItem>
          <ListboxItem key="edit">AWS, Nomucloud-private cloud.</ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </PopoverContent>
  );

  return (
    <div>
      <Card className="w-full max-w-[540px] md:max-w-[90%] m-2 md:m-4 border-small border-white/50 shadow-pink-500/30">
        <CardHeader className="justify-between">
          <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
            <Avatar isBordered radius="full" size="lg" src="/images/dom.jpg" />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small font-semibold leading-none text-default-600">
                Dominique S.D
              </h4>
              <h4 className="text-small leading-none text-default-400">
                SWE/SRE
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                TRaaS OP
              </h5>
            </div>
          </div>
          <Chip color="success">2024 - now</Chip>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-600">
          <p>
            I am a professional IT with working experience in the
            software/system engineering space. I am skilled in Software
            Engineering focusing on cloud-native applications. Now, I am working
            at
            <Link
              isBlock
              showAnchorIcon
              color="secondary"
              href="https://www.tranzas.co.jp/"
            >
              TRaaS
            </Link>
            company, building IoT-based platform
            <Link
              isBlock
              showAnchorIcon
              color="secondary"
              href="https://www.tranzas.co.jp/lineup/alrux8/"
            >
              AIrux
            </Link>{" "}
            IoTaaS product to cut off Electricity bill.
          </p>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="m-2">
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button className="capitalize" color="success" variant="flat">
                    Software Engineer(SWE)
                  </Button>
                </PopoverTrigger>
                {contentSWE}
              </Popover>
            </div>
            <div className="m-2">
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button
                    className="capitalize"
                    color="secondary"
                    variant="flat"
                  >
                    Site Reliability Engineer(SRE)
                  </Button>
                </PopoverTrigger>
                {contentSRE}
              </Popover>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-wrap gap-3">
          <Chip color="success" variant="dot">
            React
          </Chip>
          <Chip color="success" variant="dot">
            Django
          </Chip>
          <Chip color="secondary" variant="dot">
            K8s
          </Chip>
          <Chip color="secondary" variant="dot">
            Prometheus
          </Chip>
          <Chip color="secondary" variant="dot">
            Grafana
          </Chip>
          <Chip color="secondary" variant="dot">
            GitLab
          </Chip>
        </CardFooter>
      </Card>
      <Chip color="success" variant="dot"></Chip>
      <Card className="w-full max-w-[540px] md:max-w-[90%] m-2 md:m-4 border-small border-white/50 shadow-pink-500/30">
        <CardHeader className="justify-between">
          <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-5">
            <Avatar
              isBordered
              radius="full"
              size="lg"
              src=""
              fallback={
                <DoneIcon
                  className="animate-pulse w-6 h-6 text-default-900"
                  fill="currentColor"
                  size={20}
                />
              }
            />
            <div className="flex flex-col gap-1 items-start justify-center">
              <h4 className="text-small leading-none text-default-500">
                System Engineer
              </h4>
              <h5 className="text-small tracking-tight text-default-400">
                Michael Page Japan
              </h5>
            </div>
          </div>
          <Chip color="secondary">2021 - 2023</Chip>
        </CardHeader>
        <CardBody className="px-3 py-0 text-small text-default-500">
          As system engineer at Michel Page I joined 2 different projects:
          <ul>
            <li>
              <span className={"text-default-600"}>OneCloud at Rakuten:</span> DevOps/Server-side Engineer in Load balance
              as a service(LBaaS)
            </li>
            <li>
              <span className={"text-default-600"}>Data Service team at Nomura as a System Engineer</span> in Production
              services.
            </li>
          </ul>
          I covered key responsibilities in System Reliability and Production
          Engineering, including:
          <Accordion variant="shadow">
            <AccordionItem
              key="1"
              aria-label="Data SLAs, SLIs."
              title="Data SLAs, SLIs."
            >
              Defining and maintaining Service Level Objectives (SLOs) and
              Service Level Indicators (SLIs) with a focus on data quality.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Incidents management."
              title="Incidents management."
            >
              Conducting post-mortem activities, including fixing, supporting,
              and escalating incidents, as well as leading post-incident
              reviews.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Release management and CI/CD."
              title="Release management and CI/CD."
            >
              Designing, supporting, and enhancing the availability,
              scalability, stability, reliability, monitoring, alerting, and
              latency of systems to ensure optimal performance and reliability.
            </AccordionItem>
          </Accordion>
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3">
            <div className="m-2">
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button
                    className="capitalize"
                    color="secondary"
                    variant="flat"
                  >
                    DevOps Engineer(LBaaS)
                  </Button>
                </PopoverTrigger>
                {contentDevops}
              </Popover>
            </div>
            <div className="m-2">
              <Popover placement="right-start">
                <PopoverTrigger>
                  <Button
                    className="capitalize"
                    color="secondary"
                    variant="flat"
                  >
                    System Engineer(SRE-DaaS)
                  </Button>
                </PopoverTrigger>
                {contentSE}
              </Popover>
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-wrap gap-3">
          <Chip color="secondary" variant="dot">
            ServiceNow
          </Chip>
          <Chip color="secondary" variant="dot">
            AWS
          </Chip>
          <Chip color="secondary" variant="dot">
            OneCloud
          </Chip>
          <Chip color="secondary" variant="dot">
            NomuCloud
          </Chip>
          <Chip color="secondary" variant="dot">
            K8s
          </Chip>
          <Chip color="secondary" variant="dot">
            Prometheus
          </Chip>
          <Chip color="secondary" variant="dot">
            Grafana
          </Chip>
          <Chip color="secondary" variant="dot">
            Jenkins
          </Chip>
        </CardFooter>
      </Card>
    </div>
  );
}
export const ListboxWrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);

export const DoneIcon = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
      />
    </svg>
  );
};

export const Job1Wrapper = ({ children }) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
