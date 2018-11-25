<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image" style="background-image: url('img/bg3.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">About Us</h1>
                        <h4>Meet the amazing team behind this project and find out more about how we work.</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="section">

            <div class="separator-line separator-primary"></div>
            <div class="projects-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto text-center">
                            <h2 class="title">We have many advantages</h2>

                            <div class="section-space"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-5 ml-auto">
                            <card type="background" raised class="card-background-product" style="background-image: url('img/bg3.jpg')">
                                <h2 class="card-title">Social Analytics</h2>
                                <p class="card-description">
                                    Insight to help you create, connect, and convert. Understand Your Audience's
                                    Interests, Influence, Interactions, and Intent. Discover emerging topics and
                                    influencers to reach new audiences.
                                </p>
                                <badge type="neutral">Analytics</badge>
                            </card>
                        </div>
                        <div class="col-md-5 mr-auto">
                            <info-section type="danger" icon="now-ui-icons ui-2_chat-round" title="Listen to Social Conversations" description="Gain access to the demographics, psychographics, and location of unique people who talk about your brand." />

                            <info-section type="danger" icon="now-ui-icons business_chart-pie-36" title="Performance Analyze" description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports." />

                            <info-section type="danger" icon="now-ui-icons design-2_ruler-pencil" title="Social Conversions" description="Track actions taken on your website that originated from social, and understand the impact on your bottom line." />
                        </div>
                    </div>
                    <hr />
                    <div class="row">
                        <div class="col-md-5 ml-auto mt-5">
                            <info-section type="warning" icon="now-ui-icons users_single-02" title="Work With Any Team" description="Whether it’s for work or even the next family vacation, Trello helps your team." />

                            <info-section type="warning" icon="now-ui-icons business_chart-bar-32" title="A Productivity Platform" description="Integrate the apps your team already uses directly into your workflow." />

                            <info-section type="warning" icon="now-ui-icons arrows-1_refresh-69" title="Always In Sync" description="No matter where you are, Trello stays in sync across all of your devices." />

                        </div>
                        <div class="col-md-5 mr-auto">
                            <card type="background" raised class="card-background-product" style="background-image: url('img/bg3.jpg')">
                                <h2 class="card-title">Trello lets you work.</h2>
                                <p class="card-description text-white">
                                    Trello’s boards, lists, and cards enable you to organize and prioritize your
                                    projects in a fun, flexible and rewarding way.
                                </p>
                                <badge type="neutral">Trello</badge>
                            </card>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-contact">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 mr-auto ml-auto">
                            <h2 class="text-center title">Want to work with us?</h2>
                            <h4 class="text-center description">Divide details about your product or agency work
                                into parts. Write a few lines about each one and contact us about any further
                                collaboration. We will get back to you in a couple of hours.</h4>
                            <form class="contact-form">
                                <div class="row">
                                    <div class="col-md-4">
                                        <label>First name</label>
                                        <fg-input addon-left-icon="now-ui-icons users_circle-08" v-model="form.firstName" placeholder="First Name...">
                                        </fg-input>
                                    </div>
                                    <div class="col-md-4">
                                        <label>Your email</label>
                                        <fg-input addon-left-icon="now-ui-icons ui-1_email-85" v-model="form.email" placeholder="Email Here...">
                                        </fg-input>
                                    </div>
                                    <div class="col-md-4">
                                        <label>Speciality</label>
                                        <fg-input>
                                            <el-select class="select-default" v-model="form.speciality">
                                                <el-option class="select-default" value="1" label="I'm a Designer"></el-option>
                                                <el-option class="select-default" value="2" label="I'm a Developer"></el-option>
                                                <el-option class="select-default" value="3" label="I'm a Hero"></el-option>
                                            </el-select>
                                        </fg-input>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4 ml-auto mr-auto text-center">
                                        <button class="btn btn-primary btn-round mt-4 btn-lg">
                                            Let's talk
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
  Card,
  Button,
  Badge,
  InfoSection,
  FormGroupInput,
  Checkbox
} from '@/components';
import { Select, Option } from 'element-ui';

export default {
  name: 'about-us',
  bodyClass: 'about-us',
  components: {
    Card,
    InfoSection,
    Badge,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox,
    [FormGroupInput.name]: FormGroupInput,
    [Select.name]: Select,
    [Option.name]: Option
  },
  data() {
    return {
      form: {
        firstName: '',
        email: '',
        speciality: ''
      }
    };
  }
};
</script>
<style scoped>
.description {
  font-weight: bold;
}
</style>
