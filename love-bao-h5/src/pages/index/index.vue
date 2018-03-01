<template>
	<div class="main">
		<div class="bg-header"></div>
		<div class="content">
			<img src="../../assets/logo.png">
			<div class="btn-line">
				<a v-if="online" class="btn" href="http://a.app.qq.com/o/simple.jsp?pkgname=me.fmfm.loverfund">立即下载</a>
				<span v-else class="btn">敬请期待</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				online: true
			}
		}
	}
</script>

<style lang='scss'>
	@import './index.scss';
	html, body {
		min-height: 100%;
		width: 100%;
		background-color: #ff505c;
		background: linear-gradient(to bottom right, #ff505c, #ff5079);
	}
	.bg-header {
		background-image: url(../../assets/love_h5_header.jpg);
		background-repeat: no-repeat;
		background-size: 100% auto;
		width: 100%;
		padding: 55% 0;
	}
	.content {
		width: 100%;
		text-align: center;
		padding-bottom: 45px;
		img {
			display: inline-block;
			width: 50%;
			margin-bottom: 102px;
		}
		.btn {
			position: relative;
			z-index: 100;
			display: inline-block;
			background: #fff;
			text-align: center;
			color: #000;
			width: 58.66%;
			height: 92px;
			line-height: 92px;
			font-size: 42px;
			font-weight: bolder;
			text-decoration: none;
			&:after {
				content: "";

				position: absolute;
				z-index: 1;
				bottom: -14px;
				left: 2.5%;

				background-color: #4e44d3;
				height: 14px;
				width: 95%;
			}
		}
	}
</style>