import Image from 'next/image';
import { FC } from 'react';

import crownImg from 'images/crown-2.png';
import topLeaves from 'images/top_leaves.png';
import rightLeaves from 'images/right_leaves.png';
import leftLeaves from 'images/left_leaves.png';
import Plx from 'react-plx';
import { leftLeavesPlxConf, rightLeavesPlxConf, topLeavesPlxConf } from '@/lib/plx-configs';

type Props = {
  children?: React.ReactNode;
};

export const DateInfo: FC<Props> = () => {
  return (
    <div>
      <div className="text-center text-3xl mb-8">
        <p>Saturday, April 22nd</p>
        <p>12:00 - 3:00pm</p>
      </div>
      <div className="sepia-all-images">
        <p className=" font-display mb-1 font-bold text-center text-2xl">Save the date!</p>{' '}
        <p style={{ margin: '0px 0px 10px 0px', textAlign: 'center', fontSize: '0px' }}>
          {' '}
          <a
            href="https://www.addevent.com/event/ma16349084+apple"
            title="Apple"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-apple-t1.png"
              alt="Apple"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/ma16349084+google"
            title="Google"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-google-t1.png"
              alt="Google"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/ma16349084+office365"
            title="Office 365"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-office365-t1.png"
              alt="Office 365"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/ma16349084+outlook"
            title="Outlook"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlook-t1.png"
              alt="Outlook"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/ma16349084+outlookcom"
            title="Outlook.com"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-outlookcom-t1.png"
              alt="Outlook.com"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>{' '}
          <a
            href="https://www.addevent.com/event/ma16349084+yahoo"
            title="Yahoo"
            target="_blank"
            style={{ display: 'inline' }}
          >
            <img
              src="https://cdn.addevent.com/libs/imgs/icon-emd-share-yahoo-t1.png"
              alt="Yahoo"
              width="45"
              style={{ width: '45px', display: 'inline' }}
            />
          </a>
        </p>
      </div>
    </div>
  );
};

export default DateInfo;
