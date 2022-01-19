# 防止父元素高度坍塌
1. 防止高度坍塌的4种方案

    ## 问题重现

    - 父元素的高度，都是由内部浮动子元素的高度撑起的。
    - 如果子元素浮动起来，就不占用普通文档流的位置。父元素高度就会失去支撑，也称为高度坍塌。
    - 即使有部分元素留在普通文档瀑布流布局中支撑着父元素，如果浮动起来的元素高度高于留下的元素。那么浮动元素的高度会超出父元素边框，用户体验同样不好！

    ## 不好的解决

    - 给父元素设置固定的高度
    - 缺点：多数情况下，父元素高度由内容撑起，很难提前固定父元素的高度。

    ## 解决：防止高度坍塌的4种方案

    - 方案一：为父元素设置overflow:hidden属性。
        - 原理：CSS中的overflow:hidden属性会强制要求父元素必须包裹住所有内部浮动的元素，以及所有元素的margin范围。
    - 方案二：在父元素内的结尾追加一个空子元素（块级元素），并设置空子元素清除浮动影响（clear:both）。
        - 缺点：无端多出一个无意义的看不见的空元素，影响选择器和查找元素。
    - 方案三：设置父元素也浮动。
        - 原理：浮动属性也会强制父元素扩大到包含所有浮动的内部元素。
        - 缺点：会产生新的浮动影响。比如，父元素浮动，导致父元素之后平级的页脚div上移，被父元素挡住。
        - 解决：设置父元素之后的平级元素清除浮动（clear:both）。
    - 完美解决：为父元素末尾伪元素设置clear:both）。
        - 优点：既不会影响显示隐藏，又不会影响查找元素，又不会产生新的浮动问题。

    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9714f6c3-ca66-4439-8d8a-0c15c3c72d31/Untitled.png)


# 什么是BFC

- BFC(Block formatting context)
- 直译为”块级格式化上下文“
- 他是网页中一个独立的渲染区域（也称为formatting context）
- 这个渲染区域只有块级元素才能参与
- 它规定了内部的块级元素如何布局
- 简单说：BFC就是页面上的一个隔离的独立渲染区域
- 区域里面的子元素不会影响到外面的元素
- 外面的元素 也不会影响到区域里面的子元素

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de12b733-0c4f-4380-84b1-7e3309ffbe56/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4ade2981-f8b2-43e3-bc5f-9dc535f4fbb6/Untitled.png)

# BFC的布局规则

- 默认，内部的块级元素会在垂直方向，一个接一个地放置。每个块元素独占一行。
- 属于同一个BFC的两个相邻块元素在垂直方向上的margin会发生重叠/合并。但水平方向的margin不会。
- 左侧BFC渲染区域的margin，必须与右侧BFC渲染区域的margin相衔接，不能出现重叠。
- 计算父元素BFC渲染区域的高度时，内部浮动元素的高度，都必须算在内。

# 4种情况会形成BFC渲染区域

- float的值不是none
- position的值不是static或者relative
- display的值不是inline-bloce、table-cell、flex、table-caption或者inline-flex
- overflow的值不是visible

# 所以，形成BFC区域可以解决高度坍塌

- 方案一：为父元素设置overflow:hidden属性。
    - 原理：因为形成BFC区域，所以必须父元素必须包含内部float浮动元素
    - 其实这里改成display:table，也可以。因为display:table也可以形成BFC区域。只不过，需要预防其他可能造成的新问题。
- 方案三：设置父元素也浮动。
    - 原理：因为父元素float，也形成了BFC区域，必须包含内部float浮动的子元素。

# 避免垂直方向margin合并

## 问题重现

- 垂直方向上，两个元素上下margin相遇时，两元素之间的总监局并不等于两个margin的和，而是等于最大的margin
- 小的margin会被大的margin吞并