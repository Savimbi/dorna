import React from "react";
import {Listbox, Chip, ListboxItem, Card, CardHeader, CardBody, CardFooter,Popover, PopoverTrigger, PopoverContent, Avatar, Button, Link} from "@heroui/react";

export default function Resume() {
  const contentSRE = (
    <PopoverContent >
      <ListboxWrapper>
      <Listbox aria-label="Actions" >
        <ListboxItem key="new">CI/CD</ListboxItem>
        <ListboxItem key="copy">IaC</ListboxItem>
        <ListboxItem key="edit">Incidents mgnt.</ListboxItem>
      </Listbox>
    </ListboxWrapper>
    </PopoverContent>
  );
  const contentSWE = (
    <PopoverContent>
      <ListboxWrapper>
      <Listbox aria-label="Actions" >
        <ListboxItem key="new">Frontend</ListboxItem>
        <ListboxItem key="copy">Backend</ListboxItem>
        <ListboxItem key="edit">Mobile App</ListboxItem>
      </Listbox>
    </ListboxWrapper>
    </PopoverContent>
  );

  return (
    <Card className="max-w-[540px] m-2 border-small border-white/50 shadow-pink-500/30">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="lg"
            src="/images/dom.jpg"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">Dominique S.D</h4>
            <h4 className="text-small leading-none text-default-400">SWE/SRE</h4>
            <h5 className="text-small tracking-tight text-default-400">TRaaS OP</h5>
          </div>
        </div>
        <Chip color="success" >2024 - now</Chip>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-600">
        <p>I am a professional IT with working experience in the software/system engineering space. 
          I am skilled in Software Engineering focusing on cloud-native applications. 
          Now, I am working at<Link isBlock showAnchorIcon color="secondary" href="https://www.tranzas.co.jp/">
          TRaaS</Link>company, building IoT based platform <Link isBlock showAnchorIcon color="secondary" href="https://www.tranzas.co.jp/lineup/alrux8/">
      AIrux
      </Link> IoTaaS product to cut off Electricity bill.</p>
      <div className="flex gap-3">
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
            <Button className="capitalize" color="secondary" variant="flat">
              Site Reliability Engineer(SRE)
            </Button>
          </PopoverTrigger>
          {contentSRE}
        </Popover>
      </div>
      </div>
      </CardBody>
      <CardFooter className="gap-3">
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
      Prometeus
      </Chip>
      <Chip color="secondary" variant="dot">
      Grafana
      </Chip>
      </CardFooter>
    </Card>
  );
}
export const ListboxWrapper = ({children}) => (
  <div className="w-full max-w-[260px] border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);


