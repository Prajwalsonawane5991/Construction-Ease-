// import React from "react"

// const GalleryComponent = () => {

//   return (

//     <section className="md-section" id="id4" style={{ backgroundColor: "#fff" }}>
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 col-xs-offset-0 col-sm-offset-0 col-md-offset-0 col-lg-offset-2">
//             <div className="sec-title sec-title__lg-title md-text-center">
//               <h2 className="sec-title__title">Our Work</h2>
//               <span className="sec-title__divider"></span>
//             </div>
//           </div>
//         </div>
//         <div className="gallery-wrap gallery-album">
//           <div
//             className="grid-css grid-css--grid"
//             data-col-lg="4"
//             data-col-md="2"
//             data-col-sm="2"
//             data-col-xs="1"
//             data-gap="30"
//           >
//             <div className="grid__inner">
//               <div className="grid-sizer"></div>
//               <div className="grid-item large">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/9.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/9.jpg"
//                           alt="How to Create and"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/9.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="Design a Perfect"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item wide">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/10.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/10.jpg"
//                           alt="How to Master"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/10.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="Using Memes in Your"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/11.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/11.jpg"
//                           alt="7 UI Choices That"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/11.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="Free PSD Files"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/12.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/12.jpg"
//                           alt="Using Memes in Your"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/12.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="Is UX Really That"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/13.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/13.jpg"
//                           alt="How To Build A"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/13.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="Free Sketch Plugins"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/14.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/14.jpg"
//                           alt="Using Memes in Your"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/14.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="How to Create and"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item large">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/1.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/1.jpg"
//                           alt="Is UX Really That"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/1.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="How to Master"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="grid-item wide">
//                 <div className="grid-item__inner">
//                   <div className="grid-item__content-wrapper">
//                     <div className="gallery gallery--grid">
//                       <div
//                         className="gallery__image bg-image"
//                         style={{
//                           backgroundImage: "url(assets/img/gallery/2.jpg)",
//                         }}
//                       >
//                         <img
//                           src="assets/img/gallery/2.jpg"
//                           alt="Getting Started with"
//                         />
//                         <a
//                           className="gallery__overlay mfp-image"
//                           href="assets/img/gallery/2.jpg"
//                           data-effect="mfp-zoom-in"
//                           title="The Essential Guide"
//                         >
//                           <div className="md-tb">
//                             <div className="md-tb__cell md-text-center">
//                               <i className="fa fa-search"></i>
//                             </div>
//                           </div>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>


//   )
// }

// export default GalleryComponent