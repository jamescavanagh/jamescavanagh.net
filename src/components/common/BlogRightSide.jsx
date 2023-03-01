import Link from 'next/link';

const BlogRightSide = ({ dynamicRoute }) => {
  return <>
    <div className="col-xl-4 col-lg-4">
      <div className="news-sidebar pl-10">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="widget">
              <h6 className="sidebar-title"> Search Here</h6>
              <div className="n-sidebar-search">
                <input type="text" placeholder="Search your keyword..." />
                <a href="#"><i className="fal fa-search"></i></a>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="widget">
              <h6 className="sidebar-title">Selected Articles</h6>
              <div className="n-sidebar-feed">
                <ul>
                  <li>
                    <div className="feed-number">
                      <Link href="/blog-details">

                        <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-1.jpg"
                          : "assets/img/blog/small-news-1.jpg"} alt="" />

                      </Link>
                    </div>
                    <div className="feed-content">
                      <span className="feed-date">
                        <i className="fal fa-calendar-alt"></i> 20 March 2022
                      </span>
                      <h6><Link href="/blog-details">AI Brain Waves</Link></h6>
                    </div>
                  </li>
                  <li>
                    <div className="feed-number">
                      <Link href="/blog-details">

                        <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-4.jpg"
                          : "assets/img/blog/small-news-4.jpg"} alt="" />

                      </Link>
                    </div>
                    <div className="feed-content">
                      <span className="feed-date">
                        <i className="fal fa-calendar-alt"></i> 24th March 2022
                      </span>
                      <h6><Link href="/blog-details">Teach to Learn, Learn to Teach</Link>
                      </h6>
                    </div>
                  </li>
                  <li>
                    <div className="feed-number">
                      <Link href="/blog-details">

                        <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-2.jpg"
                          : "assets/img/blog/small-news-2.jpg"} alt="" />

                      </Link>
                    </div>
                    <div className="feed-content">
                      <span className="feed-date">
                        <i className="fal fa-calendar-alt"></i> 20 March 2022
                      </span>
                      <h6><Link href="/blog-details">Tibet 202, Monestary</Link></h6>
                    </div>
                  </li>
                  <li>
                    <div className="feed-number">
                      <Link href="/blog-details">

                        <img src={dynamicRoute ? "/" + "assets/img/blog/small-news-3.jpg"
                          : "assets/img/blog/small-news-3.jpg"} alt="" />

                      </Link>
                    </div>
                    <div className="feed-content">
                      <span className="feed-date">
                        <i className="fal fa-calendar-alt"></i> 24th March 2022
                      </span>
                      <h6><Link href="/blog-details">Short Stories </Link>
                      </h6>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="widget">
              <h6 className="sidebar-title">Categories</h6>
              <ul className="n-sidebar-categories">
                <li>
                  <Link href="/blog-details">

                    <div className="single-category p-relative mb-10">
                      <span>Business</span>
                      <span>26</span>
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">

                    <div className="single-category p-relative mb-10">
                      Consultant
                      <span className="category-number">30</span>
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">

                    <div className="single-category p-relative mb-10">
                      Creative
                      <span className="category-number">71</span>
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">

                    <div className="single-category p-relative mb-10">
                      UI/UX
                      <span className="category-number">56</span>
                    </div>

                  </Link>
                </li>
                <li>
                  <Link href="/blog-details">

                    <div className="single-category p-relative">
                      Texhnology
                      <span className="category-number">60</span>
                    </div>

                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-12 col-md-6">
            <div className="widget">
              <h6 className="sidebar-title">Popular Tag</h6>
              <div className="stags">
                <a className="single-tag" href="#">Tech</a>
                <a className="single-tag" href="#">Travel</a>
                <a className="single-tag" href="#">Stories</a>
                <a className="single-tag" href="#">SketchNotes</a>
                <a className="single-tag" href="#">data</a>
                <a className="single-tag" href="#">Books</a>
                <a className="single-tag" href="#">Camping</a>
                <a className="single-tag" href="#">website</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

export default BlogRightSide;