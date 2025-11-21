const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ResourceCenterBanner() {
  return (
    <section aria-labelledby="rc-banner" className="text-white full-bleed">
      {/* Wrapper กำหนด width 1440 + padding ตามสเปก */}
      <div className="w-full flex justify-center">
        <div
          className="
    w-full max-w-[1440px]
    flex flex-col justify-center items-start
    h-[458px] pt-[100px] pb-[106px] px-0 sm:px-6
    lg:h-[500px] lg:pt-[203px] lg:pb-[106px] lg:px-0
"
        >
          {/* ชุดข้อความ */}
          <div
            className="
    flex w-full flex-col items-start gap-10 pl-[36px] pr-4 sm:px-6
    lg:w-[1440px] lg:px-[120px] lg:flex-col lg:items-center lg:gap-10
  "
          >
            <div className="w-full lg:max-w-none">
              <h1
                id="rc-banner"
                className="self-stretch font-['Wix_Madefor_Display',_sans-serif] not-italic font-semibold text-[32px] leading-[77px] sm:text-[48px] sm:leading-[56px] lg:text-[64px] lg:leading-[77px]"
              >
                Resource Center
              </h1>
              <p className="mt-4 self-stretch text-white font-['Wix_Madefor_Display',_sans-serif] text-[16px] leading-[22px] font-normal max-w-[40ch] sm:text-lg sm:leading-[26px] lg:max-w-none lg:font-medium lg:text-[20px] lg:leading-[26px]">
                Practical insights to help you reduce risk,
                <br />
                strengthen controls, and meet compliance
                <br />
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}