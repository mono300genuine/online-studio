<script lang="ts" setup>

</script>
<template>
	<div class="usercountsortcard bg-white rounded-md shadow-lg px-[10px] items-center relative">
		<span class="text-[13px] mt-4 text-center text-wider">老若男女・性別・経験を問わず、<br />幅広くご支持いただいています！</span>

		<span class="block border-t border-[#999999] w-[15%] mt-4"></span>

		<AtomsSkewPointedTag class="w-[128px] h-[37px] text-[15px] text-white mt-4" firstcolor="#7799FF" endcolor="#77DDFF" middlecolor="#77BCFF" text="男女比" />

		<span class="text-[13px] mt-4 text-center text-wider text-[#77CCFF]">男性にも女性にも、<br />お楽しみいただいています！</span>

		<nuxt-img src="/images/components/new/usercountsortcardsexh.webp" loading="lazy" width="306" height="235" alt="usercountsortcardsexh" class="mt-4" />

		<AtomsSkewPointedTag class="w-[128px] h-[37px] text-[15px] text-white mt-4" firstcolor="#7799FF" endcolor="#77DDFF" middlecolor="#77BCFF" text="年代分布" />

		<span class="text-[13px] mt-4 text-center text-wider text-[#77CCFF]">年代別・レベル別のクラス分けで、<br />安心してレッスンを受けられます！</span>

		<div class="relative mt-6">
			<nuxt-img src="/images/components/new/usercountsortcardage.webp" loading="lazy" width="220" height="220" alt="usercountsortcardage" />
			<div
				class="absolute top-[-15px] left-[-27px] px-4 py-1 bg-white text-[#B27E38] text-[10px] rounded-[30px] shadow-lg flex items-center justify-center">
				アクティブシニア世代</div>
			<div
				class="absolute top-[-15px] right-[-27px] px-4 py-1 bg-white text-[#EB9A54] text-[10px] rounded-[30px] shadow-lg flex items-center justify-center">
				アクティブシニア世代</div>
			<div
				class="absolute top-[45%] right-[-25%] px-4 py-1 bg-white text-[#D66790] text-[10px] rounded-[30px] shadow-lg flex items-center justify-center">
				ヤングキャリア世代</div>
			<div
				class="absolute top-[45%] left-[-25%] px-4 py-1 bg-white text-[#3074C4] text-[10px] rounded-[30px] shadow-lg flex items-center justify-center">
				働き盛りワ<br />ーキング世代</div>
			<div
				class="absolute bottom-[3%] left-[40%] px-4 py-1 bg-white text-[#2E954D] text-[10px] rounded-[30px] shadow-lg flex items-center justify-center">
				キャリア世代</div>
		</div>
	</div>
</template>