<template>
	<div class="app-slider">
		<div class="app-slider__container">
			<b-menu/>
		</div>
	</div>
</template>

<script lang="ts" name="app-slider" setup>
import BMenu from "/@/components/bmenu"
</script>

<style lang="scss">
.app-slider {
	height: 100%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

	&__logo {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 80px;
		cursor: pointer;

		img {
			height: 30px;
			width: 30px;
		}

		span {
			color: #fff;
			font-weight: bold;
			font-size: 26px;
			margin-left: 10px;
			white-space: nowrap;
		}
	}

	&__container {
		height: 100%;
		overflow-y: auto;
    box-sizing: border-box;
    padding-top: 60px;

		&::-webkit-scrollbar {
			width: 0;
			height: 0;
		}
	}

	&__menu {
		&.el-popper {
			&.is-light {
				border: 0;
			}
		}

		.el-menu {
			border-right: 0;
			background-color: transparent;

			&--popup {
				.cl-svg,
				span {
					color: #000;
				}
			}

			.el-sub-menu__title,
			&-item {
				&.is-active,
				&:hover {
          background-color: var(--color-primary,rgba(126,134,142,.16)) !important;
          color: var(--common_level1_base_color,#171a1d);

					.cl-svg,
					span {
						color: var(--common_level1_base_color,#171a1d);
					}
				}
			}

			.el-sub-menu__title,
			&-item,
			&__title {
				color: var(--common_level1_base_color,#171a1d);
				letter-spacing: 0.5px;
				height: 50px;
				line-height: 50px;

				.wrap {
					width: 100%;
					box-sizing: border-box;
					padding: 0 4px;
				}

				.cl-svg {
					font-size: 16px;
				}

				span {
					display: inline-block;
					font-size: 14px;
					letter-spacing: 1px;
					margin-left: 10px;
					user-select: none;
				}
			}

			&--collapse {
				.wrap {
					text-align: center;
				}

				.el-sub-menu__title {
					padding: 0;
				}
			}
		}
	}
}
</style>
