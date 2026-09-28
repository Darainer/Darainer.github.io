# Ryan Matthews — personal website

Engineering leadership, fractional technical leadership and focused consulting across software, intelligent sensing, robotics and Physical AI.

## Site structure

- `index.html`: selected editorial portfolio design and content.
- `assets/site.css`: responsive styling, sticky navigation and scroll presentation.
- `assets/site.js`: native-scroll progress, section reveals and AI flywheel stage tracking.
- `assets/ryan-matthews.jpg`: portrait from Ryan’s public CV repository.

The homepage is plain HTML, with no framework or build dependency. Existing Jekyll configuration and older pages remain in place. The former `index.markdown` is replaced by `index.html` so there is only one homepage output.

## Local preview

Run `python3 -m http.server 8000` from the repository root, then open http://localhost:8000/.

## Content

The site presents customer/business understanding, deep technical execution and validation as the core proposition. Physical AI is one application area within broader engineering leadership. Engagements distinguish an employment role, ongoing part-time fractional leadership and a scoped consulting project.

Professional details are grounded in Ryan’s CV and original website. Ryan supplied the camera/radar/lidar progression, Luminar AI perception work and fourth-product drone teaser. Robotics repository links and test-plan statuses are included; planned validation is not presented as completed work. The public source links appear in the page footer.

## Motion and accessibility

Normal native scrolling; no scroll hijacking. Desktop flywheel illustration sticks while its four stages scroll. Small screens use normal document flow. Reduced-motion preferences disable spatial effects. All content remains visible with JavaScript disabled. Section links, keyboard focus, skip navigation and heading structure are preserved.

## Validation

HTML structure, internal anchors, local assets and script syntax checked. Motion logic was exercised for active stages, progress boundaries, narrow screens and reduced-motion preferences in a simulated DOM. After deployment, the desktop homepage, local image loading, engagement options and flywheel navigation were inspected in a cloud browser. Mobile visual QA remains outstanding. A flywheel reading-position threshold was corrected following that inspection.

## Publishing

This repository has GitHub Pages enabled. The selected homepage replaces the former default-theme homepage on `master`; existing domain and Pages settings are not modified. Check the repository’s Pages build/deployment status after a push.
