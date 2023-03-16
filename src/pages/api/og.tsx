import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function () {
  const regsFont = (await getFontData('400')) as ArrayBuffer;
  const boldFont = (await getFontData('700')) as ArrayBuffer;
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          fontFamily: '"Amatic"',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          backgroundColor: 'rgb(113 63 18)',
        }}
      >
        <img
          src="https://i.ibb.co/cCrnxzg/forest-bg.jpg"
          width="1200"
          height="630"
          className="absolute w-full top-0 left-0"
        />
        <div tw="flex absolute">
          <div tw="flex flex-col mt-14 ml-8 w-[95%] py-12 px-4 justify-between p-8">
            <h1 tw="flex flex-col text-7xl sm:text-[12.1rem] mb-16 font-bold tracking-tight text-white text-left">
              Max's first birthday!
            </h1>
            <h3 tw="mb-0 text-7xl text-orange-50 mt-4">April 22nd @ 12:00pm</h3>
            <h3 tw="mb-8 text-7xl text-orange-50">32062 Pleasant Glen</h3>
            <div tw="flex rounded-md shadow">
              <a
                href="#"
                tw="flex relative items-center text-white text-7xl"
                style={{
                  marginRight: '10px',
                  fontSize: '5rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: 'rgb(40, 40, 40)',
                  textDecoration: 'none',
                  padding: '0 0 6px',
                  borderRadius: '12px',
                  border: 'black solid 4px',
                  borderBottom: 'none',
                  boxShadow: '1px 2px 1px rgb(40, 40, 40)',
                  backgroundImage:
                    "url('data:image/gif;base64,R0lGODlhBAAEAIABAAAAAAAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS4wLWMwNjEgNjQuMTQwOTQ5LCAyMDEwLzEyLzA3LTEwOjU3OjAxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93cyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NUY1OENCRDdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NUY1OENCRTdDMDYxMUUyOTEzMEE1MEM5QzM0NDVBMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk1RjU4Q0JCN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk1RjU4Q0JDN0MwNjExRTI5MTMwQTUwQzlDMzQ0NUEzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEAQAAAQAsAAAAAAQABAAAAgYEEpdoeQUAOw==')",
                }}
              >
                <span
                  tw="flex py-6 px-8 bg-amber-400 text-7xl"
                  style={{
                    borderRadius: '0.3rem',
                    borderBottom: '2px solid rgb(40, 40, 40)',
                  }}
                >
                  RSVP now!
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Amatic',
          data: boldFont,
          style: 'normal',
          weight: 700,
        },
        {
          name: 'Amatic',
          data: regsFont,
          style: 'normal',
          weight: 700,
        },
      ],
    },
  );
}

async function getFontData(weight: string) {
  const API = `https://fonts.googleapis.com/css2?family=Amatic+SC:wght@${weight}`;
  const css = await (
    await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        'User-Agent':
          'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1',
      },
    })
  ).text();

  const resource = css.match(/src: url\((.+)\) format\('(opentype|truetype)'\)/);
  if (!resource) return;

  return await fetch(resource[1]).then((res) => res.arrayBuffer());
}
