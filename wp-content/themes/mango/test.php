<?php if (is_category('Category A')) : ?>
<p>This is the text to describe category A</p>
<?php elseif (is_category('Category B')) : ?>
<p>This is the text to describe category B</p>
<?php else : ?>
<p>This is some generic text to describe all other category pages, 
I could be left blank</p>
<?php endif; ?>