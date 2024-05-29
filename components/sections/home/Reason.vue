<template>
  <div class="relative">

    <!-- =============== Step 1 =============== -->

    <div>
      <!-- =========== Reason =============== -->
      <div class="reasonbackground -top-[120px] z-0">
        <div class="relative ">
          <nuxt-img src="/images/reason/reasonbg.webp" loading="lazy" width="375" height="432" alt="reasonbg" />
          <div class="flex items-center justify-center w-full absolute bottom-[8.5rem]">
            <AtomsSkewTag class="w-[110px] h-[41px] text-white font-bold text-[30px] italic">01</AtomsSkewTag>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center z-10 gap-10">
        <span class="text-black z-10 text-center text-[14px] pt-2">オンラインでも<br />リアルのレッスンと変わらない<br />「仕掛け」があります！</span>
        <nuxt-img src="/images/reason/reasonlogo.webp" loading="lazy" width="151" height="32" alt="reasonlogo"
          class="z-10" />
        <span class="text-black z-10 text-center text-[20px]">全ジャンル<br />クレイジー特典プレゼント！</span>
      </div>
      <div class="flex flex-col mt-6">
        <div class="flex flex-row">
          <div class="flex flex-col relative w-[187px] h-[480px] items-center">
            <div class="relative w-[74px] h-[25px] flex items-center justify-center">
              <AtomsSkewTag class="text-white text-[12px] w-[69px] h-[25px] from-blue-500 to-blue-300">音楽</AtomsSkewTag>
            </div>
            <span class="text-[10px] text-center mt-2">ギター・サックス・ピアノ…<br />
              <span class="text-[16px] text-center">高品質な楽器を<br /></span>
              <span class="text-[16px] text-center">無料でプレゼント！</span>
            </span>
            <div class="flex relative w-full h-full mt-2">
              <nuxt-img class="absolute top-2 left-[1.5rem]" src="/images/components/reason/reasonimgblue●1.webp"
                loading="lazy" width="28" height="28" alt="reasonimgblue●1" />
              <nuxt-img class="absolute top-[3rem] left-[3rem]" src="/images/components/reason/reasonimgblue○1.webp"
                loading="lazy" width="42" height="42" alt="reasonimg○1blue" />
              <nuxt-img class="absolute top-[13rem] right-[1rem]" src="/images/components/reason/reasonimgblue○.webp"
                loading="lazy" width="69" height="69" alt="reasonimgblue○" />
              <nuxt-img class="absolute bottom-0 -left-[2.5rem]" src="/images/components/reason/reasonimgblue●.webp"
                loading="lazy" width="150" height="150" alt="reasonimgblue●" />
              <nuxt-img class="absolute top-1 right-5 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgblueset1.webp" loading="lazy" width="96" height="96"
                alt="reasonimgblueset1" />
              <nuxt-img class="absolute top-20 right-16 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgblueset2.webp" loading="lazy" width="69" height="69"
                alt="reasonimgblueset2" />
              <nuxt-img class="absolute top-28 right-3 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgblueset3.webp" loading="lazy" width="84" height="84"
                alt="reasonimgblueset3" />
              <nuxt-img class="absolute top-40 right-14 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgblueset4.webp" loading="lazy" width="96" height="96"
                alt="reasonimgblueset4" />
              <nuxt-img class="absolute bottom-3 left-3" src="/images/components/reason/reasonphoto1.webp"
                loading="lazy" width="84" height="251" alt="reasonphoto1" />
            </div>
            <div class="absolute bottom-6 w-[120px] h-[30px]">
              <AtomsLinkButton class="p-2 w-[120px] h-[30px] text-[12px]">詳細を見る</AtomsLinkButton>
            </div>
          </div>

          <div class="flex flex-col relative w-[187px] h-[480px] items-center">
            <div class="relative w-[74px] h-[25px] flex items-center justify-center">
              <AtomsSkewTag
                class="text-white text-[12px] w-[69px] h-[25px] bg-gradient-to-r from-[#EE88BB] to-[#FFCC99]">
                ワイン</AtomsSkewTag>
            </div>
            <span class="text-[10px] text-center mt-2">ワイングラス・高級ワイン…<br />
              <span class="text-[16px] text-center">テイスティングセットを<br /></span>
              <span class="text-[16px] text-center">無料でプレゼント！</span>
            </span>
            <div class="flex relative w-full h-full mt-2">
              <nuxt-img class="absolute bottom-[3.5rem] left-[1.5rem]"
                src="/images/components/reason/reasonimgred●1.webp" loading="lazy" width="39" height="39"
                alt="reasonimgred○" />
              <nuxt-img class="absolute top-[3rem] right-[3rem]" src="/images/components/reason/reasonimgred○1.webp"
                loading="lazy" width="42" height="42" alt="reasonimg○1red" />
              <nuxt-img class="absolute top-[13rem] left-[1rem]" src="/images/components/reason/reasonimgred○.webp"
                loading="lazy" width="69" height="69" alt="reasonimgred○" />
              <nuxt-img class="absolute bottom-0 -right-[2.5rem]" src="/images/components/reason/reasonimgred●.webp"
                loading="lazy" width="150" height="150" alt="reasonimgred●" />
              <nuxt-img class="absolute top-1 left-5 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgredset1.webp" loading="lazy" width="96" height="96"
                alt="reasonimgredset1" />
              <nuxt-img class="absolute top-20 left-16 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgredset2.webp" loading="lazy" width="69" height="69"
                alt="reasonimgredset2" />
              <nuxt-img class="absolute top-28 left-3 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgredset3.webp" loading="lazy" width="84" height="83"
                alt="reasonimgredset3" />
              <nuxt-img class="absolute top-40 left-14 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgredset4.webp" loading="lazy" width="96" height="96"
                alt="reasonimgredset4" />
              <nuxt-img class="absolute bottom-3 right-3" src="/images/components/reason/reasonphoto2.webp"
                loading="lazy" width="73" height="251" alt="reasonphoto1" />
            </div>
            <div class="absolute bottom-6 w-[120px] h-[30px]">
              <AtomsLinkButton class="p-2 w-[120px] h-[30px] text-[12px]">詳細を見る</AtomsLinkButton>
            </div>
          </div>
        </div>

        <div class="flex flex-row mt-4">
          <div class="flex flex-col relative w-[187px] h-[480px] items-center">
            <div class="relative w-[74px] h-[25px] flex items-center justify-center">
              <AtomsSkewTag
                class="text-white text-[12px] w-[69px] h-[25px] bg-gradient-to-r from-[#99DD77] to-[#EEEE55]">茶道
              </AtomsSkewTag>
            </div>
            <span class="text-[10px] text-center mt-2">茶道具・畳・茶釜・和菓子…<br />
              <span class="text-[16px] text-center">茶道具一式を<br /></span>
              <span class="text-[16px] text-center">無料でプレゼント！</span>
            </span>
            <div class="flex relative w-full h-full mt-2">
              <nuxt-img class="absolute top-2 left-[1.5rem]" src="/images/components/reason/reasonimggreen●1.webp"
                loading="lazy" width="35" height="35" alt="reasonimggreen●1" />
              <nuxt-img class="absolute top-[3rem] left-[3rem]" src="/images/components/reason/reasonimggreen○1.webp"
                loading="lazy" width="42" height="42" alt="reasonimg○1green" />
              <nuxt-img class="absolute top-[13rem] right-[1rem]" src="/images/components/reason/reasonimggreen○.webp"
                loading="lazy" width="69" height="69" alt="reasonimggreen○" />
              <nuxt-img class="absolute bottom-0 -left-[2.5rem]" src="/images/components/reason/reasonimggreen●.webp"
                loading="lazy" width="150" height="150" alt="reasonimggreen●" />
              <nuxt-img class="absolute top-1 right-5 rounded-full shadow-lg"
                src="/images/components/reason/reasonimggreenset1.webp" loading="lazy" width="96" height="96"
                alt="reasonimggreenset1" />
              <nuxt-img class="absolute top-20 right-16 rounded-full shadow-lg"
                src="/images/components/reason/reasonimggreenset2.webp" loading="lazy" width="69" height="69"
                alt="reasonimggreenset2" />
              <nuxt-img class="absolute top-28 right-3 rounded-full shadow-lg"
                src="/images/components/reason/reasonimggreenset3.webp" loading="lazy" width="84" height="84"
                alt="reasonimggreenset3" />
              <nuxt-img class="absolute top-40 right-14 rounded-full shadow-lg"
                src="/images/components/reason/reasonimggreenset4.webp" loading="lazy" width="96" height="96"
                alt="reasonimgbluegreenset4" />
              <nuxt-img class="absolute bottom-3 left-3" src="/images/components/reason/reasonphoto3.webp"
                loading="lazy" width="86" height="194" alt="reasonphoto3" />
            </div>
            <div class="absolute bottom-6 w-[120px] h-[30px]">
              <AtomsLinkButton class="p-2 w-[120px] h-[30px] text-[12px]">詳細を見る</AtomsLinkButton>
            </div>
          </div>

          <div class="flex flex-col relative w-[187px] h-[480px] items-center">
            <div class="relative w-[74px] h-[25px] flex items-center justify-center">
              <AtomsSkewTag
                class="text-white text-[12px] w-[69px] h-[25px] bg-gradient-to-r from-[#BBAA88] to-[#EEDD55]">陶芸
              </AtomsSkewTag>
            </div>
            <span class="text-[10px] text-center mt-2">焼き窯・ろくろ・粘土…<br />
              <span class="text-[16px] text-center">陶芸完結セットを<br /></span>
              <span class="text-[16px] text-center">無料でプレゼント！</span>
            </span>
            <div class="flex relative w-full h-full mt-2">
              <nuxt-img class="absolute bottom-[3.5rem] left-[1.5rem]"
                src="/images/components/reason/reasonimgyel●1.webp" loading="lazy" width="35" height="35"
                alt="reasonimgyel○" />
              <nuxt-img class="absolute top-[3rem] right-[3rem]" src="/images/components/reason/reasonimgyel○1.webp"
                loading="lazy" width="42" height="42" alt="reasonimg○1yel" />
              <nuxt-img class="absolute top-[13rem] left-[1rem]" src="/images/components/reason/reasonimgyel○.webp"
                loading="lazy" width="69" height="69" alt="reasonimgyel○" />
              <nuxt-img class="absolute bottom-0 -right-[2.5rem]" src="/images/components/reason/reasonimgyel●.webp"
                loading="lazy" width="150" height="150" alt="reasonimgyel●" />
              <nuxt-img class="absolute top-1 left-5 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgyelset1.webp" loading="lazy" width="96" height="96"
                alt="reasonimgyelset1" />
              <nuxt-img class="absolute top-20 left-16 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgyelset2.webp" loading="lazy" width="69" height="69"
                alt="reasonimgyelset2" />
              <nuxt-img class="absolute top-28 left-3 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgyelset3.webp" loading="lazy" width="84" height="84"
                alt="reasonimgyelset3" />
              <nuxt-img class="absolute top-40 left-14 rounded-full shadow-lg"
                src="/images/components/reason/reasonimgyelset4.webp" loading="lazy" width="96" height="96"
                alt="reasonimgyelset4" />
              <nuxt-img class="absolute bottom-3 right-3" src="/images/components/reason/reasonphoto4.webp"
                loading="lazy" width="77" height="255" alt="reasonphoto4" />
            </div>
            <div class="absolute bottom-6 w-[120px] h-[30px]">
              <AtomsLinkButton class="p-2 w-[120px] h-[30px] text-[12px]">詳細を見る</AtomsLinkButton>
            </div>
          </div>
        </div>
      </div>

      <!-- ============== user's voice ============ -->

      <div class="flex flex-col items-center z-10 mt-4">
        <nuxt-img src="/images/reason/user_voice.webp" loading="lazy" width="179" height="25" alt="user_voice"
          class="z-10" />
        <div class="flex flex-row justify-center w-full p-4 text-[#7799FF]">
          <div class="text-[32px] text-center">\</div>
          <div class="text-[16px] text-center mx-4 font-sans-jp">具体的なクラスを<br />覗いてみよう！</div>
          <div class="text-[32px] text-center">/</div>
        </div>
        <CardsUserVoiceSwiperCard />
      </div>
      <div>
        <CardsLogCard />
      </div>
    </div>

    <!-- ====================== Step 2 ================= -->

    <div class="relative">
      <!-- =========== Reason logo =============== -->
      <div class="reasonbackground -top-[4rem]">
        <div class="relative ">
          <nuxt-img src="/images/reason/reasonbg2.webp" loading="lazy" width="375" height="267" alt="reasonbg"
            class="z-0" />
          <div class="flex items-center justify-center w-full absolute bottom-[8.5rem]">
            <AtomsSkewTag class="w-[110px] h-[41px] text-white font-bold text-[30px] italic">02</AtomsSkewTag>
          </div>
        </div>
      </div>
      <div class="flex flex-col items-center z-10 gap-10 mt-14">
        <nuxt-img src="/images/reason/reasonlogo.webp" loading="lazy" width="151" height="32" alt="reasonlogo"
          class="z-10" />
        <span class="text-black z-10 text-center text-[20px]">進化を続ける<br />オンラインシステム</span>
      </div>

      <!-- listbutton -->
      <AtomsReasonButtonGroup />

      <!-- Card -->
      <div class="flex justify-center items-center mt-16">
        <CardsReasonCardSm />
      </div>
      <div class="flex justify-center items-center mt-12">
        <CardsReasonCardLg />
      </div>
    </div>
  </div>
</template>