<template>
    <div class="w-[164px] h-[509px] relative flex flex-col items-center">
        <span class="text-[20px]"><strong>11.18</strong></span>
        <span class="text-[15px] text-center tracking-[0.75rem] pl-3"> Sun</span>
        <div class="w-[54px] h-[20px] py-1 my-2 flex justify-center items-center rounded-l-full rounded-r-full text-[10px] text-[#FF4444] text-center border border-gray-300">
            満員御礼
        </div>
        <div class="relative mt-2 rounded-[40px] shadow-xl">
            <nuxt-img src="/images/components/community/swiperbg1.webp" loading="lazy"  width="164" height="164" alt="swiperbg"/>
            <nuxt-img src="/images/components/community/swipertag1.webp" loading="lazy"  width="129" height="43" alt="swipertag1" class="absolute top-[57px] left-[18px]"/>
        </div>
        <span class="my-2">星空キャンプ</span>
        <div class="flex flex-row items-center w-full">
            <nuxt-img src="/images/components/community/swiperphoto1.webp" loading="lazy" width="36" height="36" alt="swiperphoto1" class="rounded-full shadow-lg"/>
            <div class="flex flex-col ml-2">
                <div class="text-[10px] text-[#2FBD9A]"><strong>EVNTR</strong></div>
                <div class="text-black text-[10px]">Wataru</div>
            </div>
        </div>
        <div class="w-full text-[11px] mt-2">
            日頃の仕事を忘れて、山の上へ。満点の星空の中、普段言えないこと、話してみませんか。初心者大歓迎！キャンピング用品シェア中。
        </div>
        <div class="flex flex-row items-center w-full mt-4">
            <nuxt-img src="/images/components/community/yen.webp" loading="lazy"  width="15" height="15" alt="yen"/>
            <span class="text-[12px] ml-4">1,000円</span>
        </div>
        <div class="w-[146px] h-[32px] mt-4 flex items-center  bg-[#DDDDDD] justify-center text-[12px] text-white relative rounded-l-full rounded-r-full">
            イベント申し込み
            <nuxt-img src="/icons/arrow.webp" loading="lazy"  width="8" height="13" alt="arrow" class="absolute top-[10px] right-2"/>
        </div>
    </div>
</template>