# Horizontal Scroll Animation

## Description

Horizontal Scroll Animation is a lightweight JavaScript package that allows you to create horizontal scroll animations easily. You can control the scroll direction (left or right) and scroll speed (fast or slow) 

## Installation

To use Horizontal Scroll Animation in your project, install it via npm:

```bash
npm install horizontal-scroll-animation
```

## Usage

1. **Include the Script**:
   Add the script to your HTML file using a `<script>` tag. You can reference the script from the `node_modules` directory:

   ```html
   <script src="./node_modules/horizontal-scroll-animation/index.js"></script>
   ```

2. **Create Your Content**:
   Create a c `<div>` for your content with specific classes and IDs to control the animation:

   ```html
    <div class="scroller" animation-duration="slow">
    <div class="tag-list scroller_inner">
        <!-- content here -->
    </div>
   </div> 

   ```

   - Use data-direction `right` or `left` to set the scroll direction (right or left).
   - Use animation-duration `"fast"` or `"slow"` to set the scroll speed (fast or slow).


   ```

2. **View in Browser**:
   Open your HTML file in a web browser. The horizontal scroll animation should now be active based on the settings you provided in your HTML code.

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Horizontal Scroll Animation Example</title>
<script src="./node_modules/horizontal-scroll-animation/index.js"></script>
</head>
<body>
   <div class="scroller" animation-duration="slow">
    <div class="tag-list scroller_inner">
        <img src="image1.jpg" alt="">
        <img src="image2.jpg" alt="">
        <img src="image3.png" alt="">
        <img src="image4.jpg" alt="">
        <img src="image5.jpg" alt="">
        <img src="image6.jpg" alt="">
        <img src="image7.jpg" alt="">
        <img src="image8.jpg" alt="">
    </div>
   </div> 

</body>
</html>
```

## License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---