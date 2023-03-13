import Image from 'next/image';
import { FC } from 'react';

import { leftLeavesPlxConf, rightLeavesPlxConf, topLeavesPlxConf } from '@/lib/plx-configs';
import crownImg from 'images/crown-2.png';
import leftLeaves from 'images/left_leaves.png';
import rightLeaves from 'images/right_leaves.png';
import topLeaves from 'images/top_leaves.png';
import Plx from 'react-plx';

type Props = {
  children?: React.ReactNode;
};

export const Header: FC<Props> = () => {
  return (
    <div className="relative">
      <Plx
        parallaxData={topLeavesPlxConf}
        className="absolute left-0 top-0 h-[16rem] w-full md:hidden"
      >
        <Image src={topLeaves} className="w-full" width="1500" alt="Leaves top" />
      </Plx>
      <Plx parallaxData={rightLeavesPlxConf} className="absolute right-0 top-0 h-[40rem]">
        <Image src={rightLeaves} width="130" alt="Wild crown" />
      </Plx>
      <Plx parallaxData={leftLeavesPlxConf} className="absolute top-0 h-[40rem] w-64">
        <Image src={leftLeaves} width="130" alt="Wild crown" />
      </Plx>
      <div className="hidden md:flex md:flex-row">
        <Image src={topLeaves} className="w-[600px]" width="1500" alt="Leaves top" />
        <Image src={topLeaves} className="w-[600px] ml-[-5rem]" width="1500" alt="Leaves top" />
        <Image src={topLeaves} className="w-[600px] ml-[-5rem]" width="1500" alt="Leaves top" />
        <Image src={topLeaves} className="w-[600px]" width="1500" alt="Leaves top" />
      </div>

      <div className="p-4">
        <div className="max-w-[85%] text-center mx-auto mt-[45vh]">
          <h1 className="text-6xl">AND NOW</h1>
          <h1 className="text-6xl">LET THE</h1>
          <div className="mx-auto my-2 relative h-[9rem] rotate-12">
            <Image
              className="super-center"
              src={crownImg}
              width="130"
              height="30"
              alt="Wild crown"
            />
            <h1 className="super-center mt-[1rem] text-primary-50 font-display text-4xl">Wild</h1>
          </div>

          <h1 className="text-6xl mb-2">RUMPUS START!</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
