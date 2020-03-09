<template>
  <div>
    <section class="innerpage-title-area errorTitle">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="innerpage-titile">
              <h2>مخاطب</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /Innerpage Title Area -->

    <!-- Contact Wrapper -->
    <Section class="contact-content-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="contact-form-wrapper">
              <div class="cform-top-text">
                <h4>هرچه میخواهد دل تنگت بگو</h4>
              </div>
              <div class="cf-msg"></div>
              <form @submit.prevent="addPost" id="cf">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        v-model="title"
                        type="text"
                        class="form-control"
                        id="firstName"
                        name="title"
                        placeholder="عنوان"
                      />
                    </div>
                  </div>
                  <!-- <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastName" name="date" placeholder="تاریخ">
                                    </div>
                  </div>-->
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        v-model="authorId"
                        type="text"
                        class="form-control"
                        id="email"
                        name="author"
                        placeholder="نویسنده"
                        required
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input
                        v-model="category"
                        type="text"
                        class="form-control"
                        id="subjectName"
                        name="category"
                        placeholder="دسته بندی"
                      />
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group">
                      <textarea
                        v-model="content"
                        class="form-control"
                        id="msg"
                        name="msg"
                        placeholder="محتوای پست"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button type="submit" id="submit" name="submit" class="btn btn-primary">ارسال</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
</template>

<style scoped>

.section-padding{
  background-image: url('/img/common/car_pattern.svg');
  background-color: #fce8fa;
}
.destination-details-content{
  
}
.contact-form-wrapper{}

</style>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      title: '',
      category:'',
      authorId:'',
      content:'',
    }
  },

  methods: {
    addPost() {
      return axios.post('http://blogapi.empertour.ir/post/', {
                    headers: {"Authorization": "123456789123456789", "Content-Type": "application/json"},
                    data: {
                      content: this.content,
                      title: this.title,
                      authorId: this.authorId,
                      category: this.category
                    }}).then(response => {
                        console.log(response.data);
                      })
                      .catch((error) => {
                        console.log('error 3 ' + error);
                      });
    }
  }
}
</script>