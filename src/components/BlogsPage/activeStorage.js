import React from 'react'

export default function RegexBlog() {
  return (
    <div className="blog-page active-storage">
      <h1 className="blog-header one">Active Storage makes your site legit</h1>
      <p className="blog-text">September 6, 2020 | 4 min</p>

      <p className="blog-text">Setting up Active Storage + Amazon S3 with React Frontend / Rails Backend</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/aws.png" alt="React JS to Active Storage to AWS S3" />
      </div>

      <p className="blog-text">When you’re first starting out web development, most of your forms are probably saving URLs of images, because it’s much easier to save a string than an actual image. But you’re past that now.</p>

      <p className="blog-text">You want your site to look legit, and what amateur site only takes image URLs?</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/activeStorage/long_url.png" alt="An especially long URL" />
      </div>

      <p className="blog-text">NOT YOURS, because yours is going to be legit.</p>

      <p className="blog-text">Rails 5.2 and up provides access to a cool functionality called Active Storage, which allows you to set up your backend to associate files to objects.</p>

      <p className="blog-text">First, we’ll need to install Active Storage, like so:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">rails active_storage:install</p>
        <p className="blog-text code nospace">rails db:migrate</p>
      </div>

      <p className="blog-text">Installing Active Storage gives you two migrations, because they are essentially tables for saving your files. What Active Storage will do is automatically associate those files with the objects in your other tables they belong to. You can decide where you want your files to be stored, which can include cloud services like Amazon S3.</p>

      <p className="blog-text">if you need help setting up your Amazon S3 account, check this tutorial:</p>

      <p className="blog-text"><a href="https://www.howtoforge.com/how-to-create-an-s3-bucket-object-storage-on-amazon-aws/">www.howtoforge.com/how-to-create-an-s3-bucket-object-storage-on-amazon-aws/</a></p>

      <p className="blog-text">Here, I will demonstrate code for both local and Amazon AWS.</p>

      <p className="blog-text">For local which stores everything on your personal harddrive, <span className="blog-text code span">config/storage.yml</span> should have this:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">test:</p>
        <p className="blog-text code nospace">&nbsp;service: Disk</p>
        <p>&nbsp;{`root: <%= Rails.root.join("tmp/storage") %>`}</p>

        <p className="blog-text code nospace">local:</p>
        <p className="blog-text code nospace">&nbsp;service: Disk</p>
        <p className="blog-text code nospace">&nbsp;{`root: <%= Rails.root.join("storage") %>`}</p>
      </div>

      <p className="blog-text">If you wanted to use Amazon S3, you should create an env file for your credentials and access keys, and your <span className="blog-text code span">config/storage.yml</span> should include this:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">amazon:</p>
        <p className="blog-text code nospace">&nbsp;service: s3</p>
        <p className="blog-text code nospace">&nbsp;{`access_key_id: <%= ENV['AWS_ACCESS_KEY_ID'] %>`}</p>
        <p className="blog-text code nospace">&nbsp;{`secret_access_key: <%= ENV['AWS_SECRET_ACCESS_KEY'] %>`}</p>
        <p className="blog-text code nospace">&nbsp;region: us-east-2</p>
        <p className="blog-text code nospace">&nbsp;bucket: (name of your bucket without parentheses)</p>
      </div>

      <p className="blog-text">Local <span className="blog-text code span">config/environments/development.rb</span> should have this:</p>

      <p className="blog-text code p">config.active_storage.service = :local</p>

      <p className="blog-text">Local <span className="blog-text code span">config/environments/production.rb</span> should have this:</p>

      <p className="blog-text code p">config.active_storage.service = :amazon</p>

      <p className="blog-text">The table of the model you’re attaching these files or images to shouldn’t need an attribute for the image, but in the model itself, you will need to add this code (depending if you want your object to have one image or multiple attached, you will need to write different code):</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">{`class Creator < ApplicationRecord`}</p>
        <p className="blog-text code nospace">&nbsp;has_one_attached :image</p>
        <p className="blog-text code nospace">(OR)</p>
        <p className="blog-text code nospace">&nbsp;has_many_attached :images</p>
      </div>

      <p className="blog-text">Now, onto the frontend! Because we’re almost there.</p>

      <p className="blog-text">I’m using React, but anything JS should look similar. In any typical form, you’ll have inputs, but for taking a file upload, you’ll need an input with a <span className="blog-text code span">type=“file”:</span></p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">{`<form onSubmit={this.handleSubmit}>`}</p>
        <p className="blog-text code nospace">&nbsp;{`<input type="text" name="name" onChange={this.handleChange}/>`}</p>
        <p className="blog-text code nospace">&nbsp;{`<input className="field"`}</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;type="file"</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;name="image"</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;{`onChange={this.handleUpload}`}</p>
        <p className="blog-text code nospace">&nbsp;/></p>
        <p className="blog-text code nospace">{`</form>`}</p>
      </div>

      <p className="blog-text">Your initial state would be:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">{`state = {`}</p>
        <p className="blog-text code nospace">&nbsp;name: "",</p>
        <p className="blog-text code nospace">&nbsp;address:"",</p>
        <p className="blog-text code nospace">&nbsp;comment:"",</p>
        <p className="blog-text code nospace">&nbsp;image: null</p>
        <p className="blog-text code nospace">{`}`}</p>
      </div>

      <p className="blog-text">If you are handling multiple images with <span className="blog-text code span">has_many_attached</span> on your model in the backend, then your <span className="blog-text code span">image</span> key in state should be an empty array, <span className="blog-text code span">[]</span>. Your handler for changing state should look like:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">{`handleUpload = event => {`}</p>
        <p className="blog-text code nospace">&nbsp;{`this.setState({`}</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;image: event.target.files[0]</p>
        <p className="blog-text code nospace">&nbsp;{`})`}</p>
        <p className="blog-text code nospace">{`}`}</p>
      </div>

      <p className="blog-text">A little something extra here. If you wanted to create a preview of the image after a user uploads, you can add a preview line:</p>

      <div className="blog-text code block">
        <p className="blog-text code nospace">{`handleUpload = event => {`}</p>
        <p className="blog-text code nospace">&nbsp;{`this.setState({`}</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;{`form: {`}</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;&nbsp;...this.state.form,</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;&nbsp;image: event.target.files[0],</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;&nbsp;preview: URL.createObjectURL(event.target.files[0])</p>
        <p className="blog-text code nospace">&nbsp;&nbsp;{`}`}</p>
        <p className="blog-text code nospace">&nbsp;{`})`}</p>
        <p className="blog-text code nospace">{`}`}</p>
      </div>

      <p className="blog-text">URL.createObjectURL creates a live URL of the image the user just uploaded, allowing the user to see the image. This URL lasts only the lifetime of the document, so if the user moves away and the page unmounts, the URL is removed and deleted.</p>

      <p className="blog-text">If you’ve followed everything correctly, your console.log of state after uploading should include the image:</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/activeStorage/image_object.png" alt="console log of img key in form object." />
      </div>

      <p className="blog-text">Now, just set up your code to send this state to your backend with any fetch, and Active Storage will do the rest for you. It will associate the image to your object automatically when you POST and GET, as well as automatically retrieve the image URL from Amazon S3 for you to display your image.</p>

      <p className="blog-text">Amazon S3 setup tutorial:</p>

      <p className="blog-text"><a href="https://www.howtoforge.com/how-to-create-an-s3-bucket-object-storage-on-amazon-aws/">www.howtoforge.com/how-to-create-an-s3-bucket-object-storage-on-amazon-aws/</a></p>

    </div>
  )
}