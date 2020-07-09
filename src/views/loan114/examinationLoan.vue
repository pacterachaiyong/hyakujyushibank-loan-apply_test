<template>
    <div>
        <div class="container">
            <el-row id="title" class="title-examinationNewCardLoan">
                <div>{{ titleContent }}</div>
            </el-row>

            <div v-if="carLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">ご確認いただきたいこと</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">114マイプロジェクト審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みの際、本人確認資料（運転免許証等）のご提出が必要となります。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">あわせて以下の項目につきましてもご確認ください。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">1)申込受付後、ご本人の申込意志確認のため、お電話させていただきます。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">2)本審査「承認」の後は、取扱店窓口での正式契約（ローン実行）となります。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">3)個人間売買等で条件を満たさない場合はマイカーローンとしてお受けできない場合もあります。</span>
                </el-row>

            </div>

            <div v-if="carLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">お申し込みにあたってのご同意事項</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みに先立ち、次の各事項へのご同意が必要となります。</span><br>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">※ご同意いただけない場合は、お申し込みをお受けする事ができませんのでご了承ください。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">ご同意の上、審査させていただくお客さまには下記ご同意事項を書面にて交付することが義務づけられておりますので、</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">御自宅宛に送らせていただきます。内容をご確認の上、お手許に保管ください。</span>
                </el-row>
                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">審査の結果ご希望に添えない場合もございますので、予めご了承ください。</span>
                </el-row>
            </div>

            <div v-if="freeLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">ご確認いただきたいこと</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">114マイプロジェクト審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みの際、本人確認資料（運転免許証等）のご提出が必要となります。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">あわせて以下の項目につきましてもご確認ください。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">1)個人事業主・会社代表者のお客さまは、窓口でのお申し込み手続きとなります。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">2)申込受付後、ご本人の申込意志確認のため、お電話させていただきます。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">3)本審査「承認」の後は、取扱店窓口での正式契約（ローン実行）となります。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">4)お使い道は自由ですが、ご融資の際には「資金使途の確認」や支払先への振込が条件となる場合があります。</span>
                </el-row>

            </div>

            <div v-if="freeLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">お申し込みにあたってのご同意事項</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みに先立ち、次の各事項へのご同意が必要となります。</span><br>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">※ご同意いただけない場合は、お申し込みをお受けする事ができませんのでご了承ください。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">ご同意の上、審査させていただくお客さまには下記ご同意事項を書面にて交付することが義務づけられておりますので、</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">御自宅宛に送らせていただきます。内容をご確認の上、お手許に保管ください。</span>
                </el-row>
                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">審査の結果ご希望に添えない場合もございますので、予めご了承ください。</span>
                </el-row>
            </div>

            <div v-if="educationLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">ご確認いただきたいこと</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">114マイプロジェクト審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">あわせて以下の項目につきましてもご確認ください。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">1)申込受付後、ご本人の申込意志確認のため、お電話させていただきます。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">2)本審査「承認」の後は、取扱店窓口での正式契約（ローン実行）となります。</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 20px;">3)但し、団体信用生命保険に加入いただけないときは、お断りする場合もあります。</span>
                </el-row>

            </div>

            <div v-if="educationLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">お申し込みにあたってのご同意事項</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みに先立ち、次の各事項へのご同意が必要となります。</span><br>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">※ご同意いただけない場合は、お申し込みをお受けする事ができませんのでご了承ください。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">ご同意の上、審査させていただくお客さまには下記ご同意事項を書面にて交付することが義務づけられておりますので、</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">御自宅宛に送らせていただきます。内容をご確認の上、お手許に保管ください。</span>
                </el-row>
                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">審査の結果ご希望に添えない場合もございますので、予めご了承ください。</span>
                </el-row>
            </div>

            <div v-if="cooperativeEducationLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">お申し込みにあたってのご同意事項</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みに先立ち、次の各事項へのご同意が必要となります。</span>
                </el-row>

                <el-row class="sub-detail-examinationNewCardLoan">
                    <span style="margin-left: 14px;">※ご同意いただけない場合は、お申し込みをお受けする事ができませんのでご了承ください。 <span style="color: #fc0019;">お申し込みは、1学生1申込となります。</span></span>
                </el-row>
                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">ご同意の上、審査させていただくお客さまには下記ご同意事項を書面にて交付することが義務づけられておりますので、</span>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">御自宅宛に送らせていただきます。内容をご確認の上、お手許に保管ください。</span>
                </el-row>
                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">審査の結果ご希望に添えない場合もございますので、予めご了承ください。</span>
                </el-row>

            </div>

            <div v-if="freeLoan() | educationLoan() | carLoan()">
                <div class="border-class">
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a target="_blank" href="https://www.114bank.co.jp/personal/products/loan/pdf/doui_114.pdf"><img
                                src="@/assets/imgs/examination/pdf_542.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">同意書（百十四銀行）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a
                                target="_blank"
                                href="https://www.114bank.co.jp/personal/products/loan/pdf/teikeikyouiku_yakkan.pdf"
                            ><img
                                src="@/assets/imgs/examination/pdf_537.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">保証委託約款（百十四ディーシーカード）</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a target="_blank" href="https://www.114bank.co.jp/personal/products/loan/pdf/doui_cred.pdf"><img
                                src="@/assets/imgs/examination/pdf_641.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">同意書（クレディセゾン）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a target="_blank" href="https://www.114bank.co.jp/personal/products/loan/pdf/yakka_cred.pdf"><img
                                src="@/assets/imgs/examination/pdf_216.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">保証委託約款（クレディセゾン）</div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <div v-if="cooperativeEducationLoan() ">
                <div class="border-class">
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a
                                target="_blank"
                                href="https://www.114bank.co.jp/personal/products/loan/education/pdf/teikeikyouiku_doui.pdf"
                            ><img
                                src="@/assets/imgs/examination/pdf_222.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">同意書（百十四銀行）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a
                                target="_blank"
                                href="https://www.114bank.co.jp/personal/products/loan/education/pdf/teikeikyouiku_yakkan.pdf"
                            ><img
                                src="@/assets/imgs/examination/pdf_715.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">保証委託約款（百十四ディーシーカード）</div>
                        </el-col>
                    </el-row>
                </div>
            </div>

            <div v-if="newCardLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">ご確認いただきたいこと</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span v-if="trade==='7'" class="sub-detail-examinationNewCardLoan">114ニューカードローン審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                    <span v-if="trade==='8'" class="sub-detail-examinationNewCardLoan">114カードローン住宅ローンプラス審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                    <span v-if="trade==='9'" class="sub-detail-examinationNewCardLoan">114【職域】ニューカードローン審査お申し込みにあたり、商品概要はご確認いただけたでしょうか。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_red.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みの際、本人確認資料（運転免許証等）のご提出が必要となります。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_red.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">申し込み受付後、ご本人の申し込み意志確認のため、お電話させていただきます。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_red.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">本審査「承認」の後は、取扱店窓口での正式契約となります。</span>
                </el-row>
            </div>

            <div v-if="newCardLoan()" class="box-examinationNewCardLoan">
                <el-row>
                    <span class="sub-title-examinationNewCardLoan">お申し込みにあたってのご同意事項</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">お申し込みに先立ち、次の各事項へのご同意が必要となります。</span><br>
                </el-row>
                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">※ご同意いただけない場合は、お申し込みをお受けする事ができませんのでご了承ください。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">ご同意の上、審査させていただくお客さまには下記ご同意事項を書面にて交付することが義務づけられておりますので、</span>
                </el-row>

                <el-row class="sub-detail-top-examinationNewCardLoan">
                    <span style="margin-left: 25px;">御自宅宛に送らせていただきます。内容をご確認の上、お手許に保管ください。</span>
                </el-row>

                <el-row class="detail-top-examinationNewCardLoan">
                    <img src="@/assets/imgs/examination/bullet_grey.svg" alt="">
                    <span class="sub-detail-examinationNewCardLoan">審査の結果ご希望に添えない場合もございますので、予めご了承ください。</span>
                </el-row>
            </div>

            <div v-if="newCardLoan()">
                <div class="border-class">
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a target="_blank" href="https://www.114bank.co.jp/personal/products/loan/pdf/doui_114.pdf"><img
                                src="@/assets/imgs/examination/pdf_542.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">同意書（百十四銀行）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="examination-img"
                            style="height: 254px;"
                        >
                            <a target="_blank" href="https://www.114bank.co.jp/personal/products/loan/pdf/doui_114dc.pdf"><img
                                src="@/assets/imgs/examination/pdf_167.svg"
                                alt=""
                            ></a>
                            <div style="margin-top: 5px;">同意書（百十四ディーシーカード）</div>
                        </el-col>
                    </el-row>
                </div>
            </div>

        </div>
        <div class="backgroudColor-class">
            <div
                v-if="freeLoan() | educationLoan() | carLoan() | cooperativeEducationLoan()"
                style="padding-top: 40px; margin-top: 100px;"
            >
                <el-row class="footer-examination btn-div">
                    <span>上記「同意書」「保証委託約款」の内容を確認し、同意される方は「同意します」をクリックしてください。</span>
                </el-row>
            </div>

            <div
                v-if="newCardLoan()"
                style="padding-top: 40px; margin-top: 100px;"
            >
                <el-row class="footer-examination btn-div">
                    <span>上記「同意書」の内容を確認し、同意される方は「同意します」をクリックしてください。</span>
                </el-row>
            </div>

            <div style="padding-top: 60px;padding-bottom: 114px;text-align: center;">
                <el-row class="btn-div">
                    <el-col :xs="24" :sm="24">
                        <el-button
                            type="danger"
                            class="backBtn-examination"
                            style="font-weight: bold"
                            @click="nextBtn()"
                        >同意します
                        </el-button>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';

  @Component
export default class Error extends Vue {
    titleContent: string = ''
    successFlg: boolean = false

    args: any = [
      {loanType: 'ニューカードローン', trade: '7', agreePageTitle: 'ニューカードローン審査',applyPageTitle:'ニューカードローン審査申込書'},
      {loanType: 'ニューカードローン', trade: '8', agreePageTitle: '住宅ローンプラス審査',applyPageTitle:'住宅ローンプラス審査申込書'},
      {loanType: 'ニューカードローン', trade: '9', agreePageTitle: '【職域】ニューカードローン審査',applyPageTitle:'【職域】ニューカードローン審査申込書'},
      {loanType: 'フリーローン', trade: '1', agreePageTitle: 'フリーローン審査',applyPageTitle:'フリーローン審査申込書'},
      {loanType: 'フリーローン', trade: '4', agreePageTitle: '提携企業専用ローン（フリー）審査',applyPageTitle:'提携企業専用ローン（フリー）審査申込書'},
      {loanType: 'マイカーローン', trade: '2', agreePageTitle: 'マイカーローン審査',applyPageTitle:'マイカーローン審査申込書'},
      {loanType: 'マイカーローン', trade: '5', agreePageTitle: '提携企業専用ローン（マイカー）審査',applyPageTitle:'提携企業専用ローン（マイカー）審査申込書'},
      {loanType: '教育ローン', trade: '3', agreePageTitle: '教育ローン審査',applyPageTitle:'教育ローン審査申込書'},
      {loanType: '教育ローン', trade: '6', agreePageTitle: '提携企業専用ローン（教育）審査',applyPageTitle:'提携企業専用ローン（教育）審査申込書'},
      {loanType: '徳島文理大学提携教育ローン', trade: '10', agreePageTitle: '徳島文理大学提携教育ローン審査',applyPageTitle:'徳島文理大学提携教育ローン審査申込書'},
      {loanType: '四国学院大学提携教育ローン', trade: '11', agreePageTitle: '四国学院大学提携教育ローン審査',applyPageTitle:'四国学院大学提携教育ローン審査申込書'},
      {loanType: '穴吹学園提携教育ローン', trade: '12', agreePageTitle: '穴吹学園提携教育ローン審査',applyPageTitle:'穴吹学園提携教育ローン審査申込書'},
      {loanType: '禅林学園提携教育ローン', trade: '13', agreePageTitle: '禅林学園提携教育ローン審査',applyPageTitle:'禅林学園提携教育ローン審査申込書'},
      {loanType: '中国学園提携教育ローン', trade: '14', agreePageTitle: '中国学園提携教育ローン審査',applyPageTitle:'中国学園提携教育ローン審査申込書'},
      {loanType: '高松大学・高松短期大学提携教育ローン', trade: '15', agreePageTitle: '高松大学・高松短期大学提携教育ローン審査',applyPageTitle:'高松大学・高松短期大学提携教育ローン審査申込書'},
      {loanType: '香川大学提携教育ローン', trade: '16', agreePageTitle: '香川大学提携教育ローン審査',applyPageTitle:'香川大学提携教育ローン審査申込書'},
      {loanType: '四国医療専門学校提携教育ローン', trade: '17', agreePageTitle: '四国医療専門学校提携教育ローン審査',applyPageTitle:'四国医療専門学校提携教育ローン審査申込書'},
      {loanType: '岡山商科大学提携教育ローン', trade: '18', agreePageTitle: '岡山商科大学提携教育ローン審査',applyPageTitle:'岡山商科大学提携教育ローン審査申込書'},
      {loanType: '香川短期大学提携教育ローン', trade: '19', agreePageTitle: '香川短期大学提携教育ローン審査',applyPageTitle:'香川短期大学提携教育ローン審査申込書'},

    ]

    beforeMount() {
      if (window.location.search) {
        const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
        const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
        const loanTypeName = window.location.search.split('=')[0]

        if (loanTypeName != '?loanType') {
          this.$router.push('/errorPage')
        }
        for (let item of this.args) {
          if (loanType == item.loanType && trade == item.trade) {
            this.$store.commit('loanStore/setLoanType', loanType);
            this.$store.commit('loanStore/setTrade', trade);
            this.$store.commit('loanStore/setApplyPageTitle',item.applyPageTitle);
            this.titleContent = item.agreePageTitle
            this.successFlg = true
            break
          }
        }
        if (!this.successFlg) {
          this.$router.push('/errorPage')
        }
      } else {
        this.$router.push('/errorPage')
      }
    }

    mounted() {

      let title: any = document.getElementById("header-img")
      title.scrollIntoView();
      if (this.carLoan()) {
        document.title = '114マイカーローン審査 | 百十四銀行';
        // this.titleContent = '114マイカーローン審査'
      } else if (this.freeLoan()) {
        document.title = '114フリーローン審査 | 百十四銀行';
        // this.titleContent = 'フリーローン審査'
      } else if (this.newCardLoan()) {
        document.title = '114ニューカードローン審査 | 百十四銀行';
        // this.titleContent = '114ニューカードローン審査'
      } else if (this.educationLoan()) {
        document.title = '114教育ローン審査 | 百十四銀行';
        // this.titleContent = '114教育ローン審査'
      } else if (this.cooperativeEducationLoan()) {
        // this.titleContent = this.loanType + '審査'
        document.title = this.loanType + '審査 | 百十四銀行';
      }

      this.init()
    }

    init() {
    }

    cooperativeEducationLoan() {
      return this.loanType.includes('提携教育ローン')
    }

    educationLoan() {
      return this.loanType == '教育ローン'
    }

    carLoan() {
      return this.loanType.includes('マイカーローン')
    }

    freeLoan() {
      return this.loanType.includes('フリーローン')
    }

    newCardLoan() {
      return this.loanType.includes('ニューカードローン')
    }

    public get loanType(): string {
      return this.$store.state.loanStore.loanType;
    }

    public get trade(): string {
      return this.$store.state.loanStore.trade;
    }


    nextBtn() {
      this.$store.commit('loanStore/setAgreeCheck', true);
      if (this.loanType == 'ニューカードローン') {
        this.$router.push('/reviewOptionsNewCardLoan')
      } else {
        this.$router.push('/reviewOptionsOtherLoan')
      }


    }
}
</script>

<style lang="scss">
  .backgroudColor-class {
    background: #FCFAFA 0% 0% no-repeat padding-box;
  }

  .border-class {
    border: 4px solid #FAFAFA;
    margin-top: 40px;
  }

  @media screen and (min-width: 768px) {
    .box-examinationNewCardLoan {
      margin-top: 100px;
    }
    .backBtn-examination {
      width: 180px;
      background: #fc0019;
      height: 50px;
    }
    .footer-examination {
      text-align: center;
    }
    .examination-img {
      text-align: center;
      padding-top: 60px;
    }
    .title-examinationNewCardLoan {
      font-size: 40px;
      text-align: center;
      color: #fc0019;
      margin-top: 100px;
      font-weight: bold;
    }
    .sub-title-examinationNewCardLoan {
      font-weight: bold;
      font-size: 20px;
    }
    .sub-detail-examinationNewCardLoan {
      font-size: 16px;
      margin-left: 12px;
    }
    .detail-top-examinationNewCardLoan {
      margin-top: 50px;
    }
    .sub-detail-top-examinationNewCardLoan {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 767px) {
    .btn-div {
      padding-left: 10px;
      padding-right: 10px;
    }
    .backBtn-examination {
      width: 100%;
      background: #fc0019;
      margin-top: 10px;
      height: 50px;
    }
    .examination-img {
      text-align: center;
      padding-top: 100px;
    }
    .title-examinationNewCardLoan {
      font-size: 20px;
      text-align: center;
      color: #fc0019;
      margin-top: 50px;
      font-weight: bold;
    }
    .sub-title-examinationNewCardLoan {
      font-weight: bold;
      font-size: 16px;
    }
    .detail-top-examinationNewCardLoan {
      margin-top: 50px;
    }
    .sub-detail-top-examinationNewCardLoan {
      margin-top: 10px;
    }
    .sub-detail-examinationNewCardLoan {
      font-size: 16px;
      margin-left: 12px;
    }
    .box-examinationNewCardLoan {
      margin-top: 100px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .box-examinationNewCardLoan {
      margin-top: 50px;
    }
  }
</style>
