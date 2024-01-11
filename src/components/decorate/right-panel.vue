<template>
  <div class="right">
    <el-scrollbar class="right-main">
      <el-form>
        <div class="right-title">
          <img src="/src/assets/images/decorate/tabbar.png">
          <span>底部导航</span>
        </div>
        <div class="right-tab sa-flex">
          <div class="tab-item is-active">内容</div>
          <div class="tab-item">样式</div>
          <div class="tab-item">数据</div>
        </div>
        <div class="card">
          <div class="title">导航样式</div>
          <div class="wrap">
            <el-form-item class="asterisk-left" label="选择样式"></el-form-item>
            <div class="el-form-item asterisk-left">
              <label id="el-id-9305-15" for="el-id-9305-39"
                     class="el-form-item__label"
                     style="width: 60px;">选择样式</label>
              <div class="el-form-item__content">
                <div class="el-radio-group custom-radio-button" role="radiogroup" aria-labelledby="el-id-9305-15"
                     id="el-id-9305-39"><label class="el-radio-button is-active"><input
                    class="el-radio-button__original-radio" type="radio" name="el-id-9305-16" value="1"><span
                    class="el-radio-button__inner"><i class="iconfont icontabbar-1"></i></span></label><label
                    class="el-radio-button"><input class="el-radio-button__original-radio" type="radio"
                                                   name="el-id-9305-16" value="2"><span
                    class="el-radio-button__inner"><i class="iconfont icontabbar-2"></i></span></label></div>
                <!--v-if--></div>
            </div>
            <div class="el-form-item asterisk-left"><label id="el-id-9305-17" for="el-id-9305-40"
                                                           class="el-form-item__label"
                                                           style="width: 60px;">导航风格</label>
              <div class="el-form-item__content">
                <div class="el-radio-group" role="radiogroup" aria-labelledby="el-id-9305-17" id="el-id-9305-40">
                  <label class="el-radio is-checked"><span class="el-radio__input is-checked"><input
                      class="el-radio__original" name="el-id-9305-18" type="radio" value="1"><span
                      class="el-radio__inner"></span></span><span class="el-radio__label">文字+图片</span></label><label
                    class="el-radio"><span class="el-radio__input"><input class="el-radio__original"
                                                                          name="el-id-9305-18" type="radio"
                                                                          value="2"><span
                    class="el-radio__inner"></span></span><span class="el-radio__label">文字</span></label><label
                    class="el-radio"><span class="el-radio__input"><input class="el-radio__original"
                                                                          name="el-id-9305-18" type="radio"
                                                                          value="3"><span
                    class="el-radio__inner"></span></span><span class="el-radio__label">图片</span></label></div>
                <!--v-if--></div>
            </div>
            <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-19">
              <div id="el-id-9305-19" class="el-form-item__label" style="width: 60px;">默认颜色</div>
              <div class="el-form-item__content">
                <div class="d-color-picker sa-flex">
                  <div class="el-color-picker el-tooltip__trigger el-tooltip__trigger" role="button"
                       aria-description="el.colorpicker.description" tabindex="0" id="el-id-9305-42"
                       aria-label="el.colorpicker.defaultLabel"><!--v-if-->
                    <div class="el-color-picker__trigger"><span class="el-color-picker__color"><span
                        class="el-color-picker__color-inner" style="background-color: rgb(140, 140, 140);"><i
                        class="el-icon el-color-picker__icon is-icon-arrow-down"><svg viewBox="0 0 1024 1024"
                                                                                      xmlns="http://www.w3.org/2000/svg"><path
                        fill="currentColor"
                        d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></i>
                      <!--v-if--></span></span></div>
                  </div>
                  <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                         type="text"
                                                                                         autocomplete="off"
                                                                                         tabindex="0"
                                                                                         id="el-id-9305-43">
                      <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!----></div>
                <!--v-if--></div>
            </div>
            <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-21">
              <div id="el-id-9305-21" class="el-form-item__label" style="width: 60px;">选中颜色</div>
              <div class="el-form-item__content">
                <div class="d-color-picker sa-flex">
                  <div class="el-color-picker el-tooltip__trigger el-tooltip__trigger" role="button"
                       aria-description="el.colorpicker.description" tabindex="0" id="el-id-9305-45"
                       aria-label="el.colorpicker.defaultLabel"><!--v-if-->
                    <div class="el-color-picker__trigger"><span class="el-color-picker__color"><span
                        class="el-color-picker__color-inner" style="background-color: rgb(43, 57, 99);"><i
                        class="el-icon el-color-picker__icon is-icon-arrow-down"><svg viewBox="0 0 1024 1024"
                                                                                      xmlns="http://www.w3.org/2000/svg"><path
                        fill="currentColor"
                        d="M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"></path></svg></i>
                      <!--v-if--></span></span></div>
                  </div>
                  <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                    <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                         type="text"
                                                                                         autocomplete="off"
                                                                                         tabindex="0"
                                                                                         id="el-id-9305-46">
                      <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!----></div>
                <!--v-if--></div>
            </div>
          </div>
        </div>
      </el-form>


      <form class="el-form el-form--default el-form--label-right nice-validator n-default" novalidate="novalidate">
        <div class="d-list">
          <div class="title">图标设置</div>
          <div class="wrap">
            <div>
              <div class="list-item" data-draggable="true">
                <div class="move sa-flex"><i class="iconfont iconmove sortable-drag"></i><span class="list-delete">删除</span>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-23">
                  <div id="el-id-9305-23" class="el-form-item__label" style="width: 60px;">默认图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/76574bb482da1fd62539c0253f0152d6.png"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-24">
                  <div id="el-id-9305-24" class="el-form-item__label" style="width: 60px;">选中图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/c92d07a10eec8850ab9a481638e5159b.gif"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-25" for="el-id-9305-47"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">文字</label>
                  <div class="el-form-item__content">
                    <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                           type="text"
                                                                                           autocomplete="off"
                                                                                           tabindex="0"
                                                                                           id="el-id-9305-47">
                        <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-26" for="el-id-9305-48"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">选择链接</label>
                  <div class="el-form-item__content">
                    <div class="d-url sa-flex">
                      <div class="el-input el-input-group el-input-group--append"><!-- input -->
                        <!-- prepend slot --><!--v-if-->
                        <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                             type="text"
                                                                                             autocomplete="off"
                                                                                             tabindex="0"
                                                                                             placeholder="请输入或选择"
                                                                                             id="el-id-9305-48">
                          <!-- suffix slot --><!--v-if--></div><!-- append slot -->
                        <div class="el-input-group__append"><span class="cursor-pointer">选择</span></div>
                      </div>
                    </div><!--v-if--></div>
                </div>
              </div>
              <div class="list-item" data-draggable="true">
                <div class="move sa-flex"><i class="iconfont iconmove sortable-drag"></i><span class="list-delete">删除</span>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-27">
                  <div id="el-id-9305-27" class="el-form-item__label" style="width: 60px;">默认图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/3fbe0412147a5d7f1c3116219ed39d32.png"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-28">
                  <div id="el-id-9305-28" class="el-form-item__label" style="width: 60px;">选中图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/4ce2fdff833f8a37de9a6d760deee994.gif"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-29" for="el-id-9305-49"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">文字</label>
                  <div class="el-form-item__content">
                    <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                           type="text"
                                                                                           autocomplete="off"
                                                                                           tabindex="0"
                                                                                           id="el-id-9305-49">
                        <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-30" for="el-id-9305-50"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">选择链接</label>
                  <div class="el-form-item__content">
                    <div class="d-url sa-flex">
                      <div class="el-input el-input-group el-input-group--append"><!-- input -->
                        <!-- prepend slot --><!--v-if-->
                        <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                             type="text"
                                                                                             autocomplete="off"
                                                                                             tabindex="0"
                                                                                             placeholder="请输入或选择"
                                                                                             id="el-id-9305-50">
                          <!-- suffix slot --><!--v-if--></div><!-- append slot -->
                        <div class="el-input-group__append"><span class="cursor-pointer">选择</span></div>
                      </div>
                    </div><!--v-if--></div>
                </div>
              </div>
              <div class="list-item" data-draggable="true">
                <div class="move sa-flex"><i class="iconfont iconmove sortable-drag"></i><span class="list-delete">删除</span>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-31">
                  <div id="el-id-9305-31" class="el-form-item__label" style="width: 60px;">默认图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/113eb988efc1fe17cb90cdf5311e5b63.png"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-32">
                  <div id="el-id-9305-32" class="el-form-item__label" style="width: 60px;">选中图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/2a3992a220f306d129ac1659304694bd.gif"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-33" for="el-id-9305-51"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">文字</label>
                  <div class="el-form-item__content">
                    <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                           type="text"
                                                                                           autocomplete="off"
                                                                                           tabindex="0"
                                                                                           id="el-id-9305-51">
                        <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-34" for="el-id-9305-52"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">选择链接</label>
                  <div class="el-form-item__content">
                    <div class="d-url sa-flex">
                      <div class="el-input el-input-group el-input-group--append"><!-- input -->
                        <!-- prepend slot --><!--v-if-->
                        <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                             type="text"
                                                                                             autocomplete="off"
                                                                                             tabindex="0"
                                                                                             placeholder="请输入或选择"
                                                                                             id="el-id-9305-52">
                          <!-- suffix slot --><!--v-if--></div><!-- append slot -->
                        <div class="el-input-group__append"><span class="cursor-pointer">选择</span></div>
                      </div>
                    </div><!--v-if--></div>
                </div>
              </div>
              <div class="list-item" data-draggable="true">
                <div class="move sa-flex"><i class="iconfont iconmove sortable-drag"></i><span class="list-delete">删除</span>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-35">
                  <div id="el-id-9305-35" class="el-form-item__label" style="width: 60px;">默认图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/f930c59d338a97a158ee53cb65bde082.png"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left" role="group" aria-labelledby="el-id-9305-36">
                  <div id="el-id-9305-36" class="el-form-item__label" style="width: 60px;">选中图片</div>
                  <div class="el-form-item__content">
                    <div class="sa-flex">
                      <div class="sa-uploader">
                        <div class="sa-flex sa-flex-wrap">
                          <div class="sa-uploader-item" data-draggable="true">
                            <div class="el-image"><img
                                src="/storage/decorate/20221115/1130ab158b1c31b1e1d356fa78bb5f4a.gif"
                                class="el-image__inner el-image__preview" style="object-fit: contain;"><!--v-if-->
                              <!--v-if--></div>
                            <div class="mask"><!----><i class="el-icon">
                              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                <path fill="currentColor"
                                      d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"></path>
                              </svg>
                            </i></div>
                          </div>
                        </div><!----></div>
                      <span class="tip">建议尺寸：44*44</span></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-37" for="el-id-9305-53"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">文字</label>
                  <div class="el-form-item__content">
                    <div class="el-input"><!-- input --><!-- prepend slot --><!--v-if-->
                      <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                           type="text"
                                                                                           autocomplete="off"
                                                                                           tabindex="0"
                                                                                           id="el-id-9305-53">
                        <!-- suffix slot --><!--v-if--></div><!-- append slot --><!--v-if--></div><!--v-if--></div>
                </div>
                <div class="el-form-item asterisk-left"><label id="el-id-9305-38" for="el-id-9305-54"
                                                               class="el-form-item__label"
                                                               style="width: 60px;">选择链接</label>
                  <div class="el-form-item__content">
                    <div class="d-url sa-flex">
                      <div class="el-input el-input-group el-input-group--append"><!-- input -->
                        <!-- prepend slot --><!--v-if-->
                        <div class="el-input__wrapper"><!-- prefix slot --><!--v-if--><input class="el-input__inner"
                                                                                             type="text"
                                                                                             autocomplete="off"
                                                                                             tabindex="0"
                                                                                             placeholder="请输入或选择"
                                                                                             id="el-id-9305-54">
                          <!-- suffix slot --><!--v-if--></div><!-- append slot -->
                        <div class="el-input-group__append"><span class="cursor-pointer">选择</span></div>
                      </div>
                    </div><!--v-if--></div>
                </div>
              </div>
            </div>
            <button class="el-button add-button" aria-disabled="false" type="button"><i class="el-icon">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor"
                      d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path>
              </svg>
            </i><span class="">添加</span></button>
          </div>
        </div><!----><!----><!----><!----><!----><!----></form>
    </el-scrollbar>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.sa-flex {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.right {
  flex-shrink: 0;
  width: 344px;
  height: 100%;
  background: var(--sa-background-assist);
  box-shadow: 0px 0px 0.24rem rgb(0 0 0 / 16%);
  transition: all 0.2s;
  position: relative;
  font-size: 12px;
  .right-title {
    padding: 8px 12px;
    color: var(--sa-subtitle);
    font-size: 14px;
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
  .right-tab {
    margin: 16px 20px;
    border-radius: 4px;
    border: 1px solid var(--sa-border);
    overflow: hidden;
    .tab-item {
      width: 50%;
      height: 32px;
      line-height: 32px;
      text-align: center;
      border-right: 1px solid var(--sa-border);
      background: var(--sa-border);
      /* border-radius: 4px 0 0 4px; */
      cursor: pointer;
      &.is-active {
        background: var(--sa-background-assist);
      }
    }
  }
  .title {
    height: 40px;
    line-height: 40px;
    background: var(--sa-table-header-bg);
    margin-bottom: 16px;
    padding: 0 20px;
    font-size: 14px;
    color: var(--sa-subtitle);
    display: flex;
    align-items: center;
  }
  .wrap {
    padding: 0 20px;
  }
  * {
    font-size: inherit;
  }
  .custom-radio-button .iconfont {
    font-size: 24px;
  }
}
</style>