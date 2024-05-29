<script lang="ts" setup>

import { onMounted } from 'vue';
import Swiper from 'swiper';

onMounted(() => {
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

const smcarddata = [
  {
    id: 1,
    img: "/images/components/community/sm1.webp",
    txt: "お花見"
  },
  {
    id: 2,
    img: "/images/components/community/sm2.webp",
    txt: "船上パーティー"
  },
  {
    id: 3,
    img: "/images/components/community/sm3.webp",
    txt: "海水浴ライブ"
  },
  {
    id: 4,
    img: "/images/components/community/sm4.webp",
    txt: "餅つき大会"
  },
  {
    id: 5,
    img: "/images/components/community/sm5.webp",
    txt: "秋のBBQ"
  },
  {
    id: 6,
    img: "/images/components/community/sm6.webp",
    txt: "ハロウィンパーティー"
  }
]

const matchcatddata = [
  {
    id: 1,
    img: "/images/components/community/match1.webp",
    txt: "料理合コン"
  },
  {
    id: 2,
    img: "/images/components/community/match2.webp",
    txt: "ゴルフ合コン"
  },
  {
    id: 3,
    img: "/images/components/community/match3.webp",
    txt: "ワイン合コン"
  },
]
</script>

<style scoped>
.swiper-wrapper {
  width: 300px;
  height: 509px;
  box-sizing: border-box;
}
</style>

<template>
  <div class="pt-[65px] relative flex flex-col h-[840px] items-center">
    <div class="absolute top-[55px] left-1 z-0">
      <nuxt-img src="/images/community/community.webp" loading="lazy" width="304" height="50" alt="community" />
    </div>

    <div class="absolute top-[-70px] left-[-57px]">
      <nuxt-img src="/images/community/●1.webp" loading="lazy" width="300" height="300" alt="●1" />
    </div>
    <div class="absolute top-[256px] right-[84px]">
      <nuxt-img src="/images/community/●2.webp" loading="lazy" width="120" height="120" alt="●2" />
    </div>
    <div class="absolute top-[338px] left-[12px]">
      <nuxt-img src="/images/community/●3.webp" loading="lazy" width="170" height="170" alt="●3" />
    </div>
    <div class="absolute top-[565px] right-[33px]">
      <nuxt-img src="/images/community/●4.webp" loading="lazy" width="119" height="119" alt="●4" />
    </div>
    <div class="absolute top-[127px] right-[-60px]">
      <nuxt-img src="/images/community/○1.webp" loading="lazy" width="120" height="120" alt="○1" />
    </div>
    <div class="absolute top-[365px] right-[25px]">
      <nuxt-img src="/images/community/○2.webp" loading="lazy" width="62" height="62" alt="○2" />
    </div>
    <div class="absolute top-[706px] left-[85px]">
      <nuxt-img src="/images/community/○3.webp" loading="lazy" width="83" height="83" alt="○3" />
    </div>
    <div class="absolute top-[835px] left-[-44px]">
      <nuxt-img src="/images/community/○4.webp" loading="lazy" width="120" height="120" alt="○4" />
    </div>

    <div class="absolute top-[274px] right-[33px]">
      <nuxt-img src="/images/community/photo1.webp" loading="lazy" width="180" height="180" alt="photo1" />
    </div>
    <div class="absolute top-[379px] left-[27px]">
      <nuxt-img src="/images/community/photo2.webp" loading="lazy" width="207" height="207" alt="photo2" />
    </div>
    <div class="absolute top-[561px] left-[99px]">
      <nuxt-img src="/images/community/photo3.webp" loading="lazy" width="190" height="190" alt="photo3" />
    </div>

    <AtomsCommunityTag top="235px" left="139px" title="絆" maintxt1="講師との間に" maintxt2="生まれる"/>
    <AtomsCommunityTag top="372px" left="56px" title="仲間" maintxt1="趣味を通じて繋がる" maintxt2="一生モノの"/>
    <AtomsCommunityTag top="521px" left="246px" title="恋愛" maintxt1="レッスン＆飲み会で" maintxt2="生まれる"/>

    <div class="absolute top-[766px] flex w-full justify-center">
      <div class="flex justify-center items-center  relative">
        <nuxt-img src="/images/community/tag2.webp" loading="lazy" width="339" height="80" alt="tag2" />
        <span class="text-white text-[18px] absolute top-[0.3rem] left-8 text-center">ここはあなたの</span>
        <span class="text-whi te text-[18px] absolute top-[2.8rem] right-8 text-center">セカンドコミュニティ</span>
      </div>
    </div>


    <div class="text-[24px] z-10 mb-6">
      コミュニティ
    </div>
    <div class="flex flex-row justify-center w-full mt-2 gap-6">
      <div class="text-[32px] text-center text-weight-4">\</div>
      <div class="text-[16px] text-center mx-2">リアルでの出会いを、<br />大切に考えています！</div>
      <div class="text-[32px] text-center text-weight-4">/</div>
    </div>
  </div>

  <!-- =========== EVNTRs ========= -->
  <div>
    <div class="flex justify-center z-10 mb-4 mt-[57px]">
      <nuxt-img src="/images/community/logo_EVNTRs.webp" loading="lazy" width="191" height="30" alt="logo_EVNTRs" />
    </div>
    <div class="flex flex-row justify-center w-full mt-2 gap-6">
      <div class="text-[32px] text-center text-weight-4">\</div>
      <div class="text-[16px] text-center mx-2">EVNTRs（イベンターズ）が、<br />四季折々のイベントを企画！</div>
      <div class="text-[32px] text-center text-weight-4">/</div>
    </div>
    <div class="flex justify-center relative mt-4">
      <nuxt-img src="/images/community/evntrphoto1.webp" loading="lazy" width="375" height="200" alt="evntrphoto1" />
      <div class="absolute top-[170px]">
        <AtomsSkewPointedTagCol class="w-[300px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" text1="世代・性別・国籍・仕事…" text2="バリエーション豊かな仲間が集います！" />
      </div>
    </div>

    <div class="flex flex-wrap gap-2 p-2 justify-center mt-10 relative">
      <nuxt-img src="/images/community/evntr○1.webp" loading="lazy" width="53" height="53" alt="evntr○1"
        class="absolute top-[-5px] left-[-10px]" />
      <nuxt-img src="/images/community/evntr○2.webp" loading="lazy" width="83" height="83" alt="evntr○2"
        class="absolute bottom-[-28px] right-[-16px]" />
      <CardsCommunitySmCard v-for="data in smcarddata" :key="data.id" :img="data.img" :txt="data.txt" />
    </div>

    <div class="flex justify-center items-center mt-8 relative">
      <AtomsSkewPointedTagCol class="w-[225px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" text1="PICK UP！" text2="こんなイベントを開催中！" />
    </div>

    <div class="my-6 flex justify-center">
      <div class="swiper-wrapper flex justify-start items-start">
        <div class="swiper-container ">
          <div class="swiper-wrapper flex flex-row justify-start px-[20px]">
            <div class="swiper-slide">
              <CardsCommunityEvntrSwiperCard />
            </div>
            <div class="swiper-slide">
              <CardsCommunityEvntrSwiperCard />
            </div>
            <div class="swiper-slide">
              <CardsCommunityEvntrSwiperCard />
            </div>
            <div class="swiper-slide ">
              <CardsCommunityEvntrSwiperCard />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <AtomsLinkButton class="w-[200px] h-[40px]">イベント一覧</AtomsLinkButton>
    </div>
  </div>

  <!-- ============ match ========== -->

  <div class="relative">
    <div class="absolute top-[-35px] right-[-32px]">
      <nuxt-img src="/images/community/match○.webp" loading="lazy" width="120" height="120" alt="match○" />
    </div>
    <div class="flex justify-center z-10 mb-4 mt-[57px]">
      <nuxt-img src="/images/community/matchlogo.webp" loading="lazy" width="101" height="40" alt="matchlogo" />
    </div>
    <div class="flex flex-row justify-center w-full mt-2 gap-6">
      <div class="text-[32px] text-center text-weight-4">\</div>
      <div class="text-[16px] text-center mx-2">スクールで恋して結婚へ…<br />EYSが提案する新しい出会い</div>
      <div class="text-[32px] text-center text-weight-4">/</div>
    </div>
    <div class="flex justify-center relative mt-4">
      <nuxt-img src="/images/community/matchphoto.webp" loading="lazy" width="375" height="200" alt="matchphoto" />
      <div class="absolute top-[170px]">
        <AtomsSkewPointedTagCol class="w-[295px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" text1="趣味を通じて自然に仲良くなれる、" text2="様々なイベントを開催しています！" />
      </div>
    </div>

    <div class="flex flex-wrap gap-2 p-2 justify-center mt-10 relative">
      <CardsCommunitySmCard v-for="data in matchcatddata" :key="data.id" :img="data.img" :txt="data.txt" />
    </div>

    <div class="flex justify-center mt-4">
      <AtomsLinkButton class="w-[200px] h-[40px]">スク婚ページへ</AtomsLinkButton>
    </div>
  </div>

  <!-- =========== 2nd community =========== -->

  <div class="relative">
    <div class="absolute top-[35px] left-[-70px]">
      <nuxt-img src="/images/community/2nd○.webp" loading="lazy" width="120" height="120" alt="2nd○" />
    </div>
    <div class="flex justify-center z-10 mb-4 mt-[57px]">
      <nuxt-img src="/images/community/2ndlogo.webp" loading="lazy" width="245" height="50" alt="2ndlogo" />
    </div>
    <div class="flex flex-row justify-center w-full mt-2 gap-6">
      <div class="text-[32px] text-center text-weight-4">\</div>
      <div class="text-[16px] text-center mx-2">スクールで恋して結婚へ…<br />EYSが提案する新しい出会い</div>
      <div class="text-[32px] text-center text-weight-4">/</div>
    </div>
    <div class="flex justify-center relative mt-4">
      <nuxt-img src="/images/community/2endphoto.webp" loading="lazy" width="375" height="201" alt="2endphoto" />
      <div class="absolute top-[170px]">
        <AtomsSkewPointedTagCol class="w-[295px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" text1="趣味やライフイベントに合わせた、" text2="多彩なコミュニティをご用意しています！" />
      </div>
    </div>

    <div class="flex flex-row justify-center gap-2 mt-12 relative">
      <nuxt-img src="/images/community/2endsm○.webp" loading="lazy" width="72" height="72" alt="2endsm○"
        class="absolute bottom-[-40px] right-[-35px]" />
      <nuxt-img src="/images/community/2endphotocard1.webp" loading="lazy" width="170" height="256" alt="2endphotocard1"
        class="shadow-lg rounded-lg relative z-10" />
      <nuxt-img src="/images/community/2endphotocard2.webp" loading="lazy" width="170" height="256" alt="2endphotocard2"
        class="shadow-lg rounded-lg relative z-10" />

    </div>

    <div>
      <div class="flex justify-center items-center mt-6 relative">
        <AtomsSkewPointedTagCol class="w-[220px] h-[62px] text-[15px] text-center text-white" firstcolor="#55CCAA"
          endcolor="#88DD77" middlecolor="#6ED491" text1="例えば、" text2="こんなコミュニティ！" />
      </div>
    </div>

    <div class="flex justify-center">
      <CardsCommunityExSwiperCard />
    </div>

    <div class="flex justify-center mt-4">
      <AtomsLinkButton class="w-[200px] h-[40px]">スク婚ページへ</AtomsLinkButton>
    </div>

    <div class="mt-10">
      <CardsLogCard />
    </div>
  </div>
</template>