<?php 
/**
* sidebar.php - 사이트의 공통 사이드바
* @package theme-mango
*/
?>
<?php if( is_active_sidebar ('mango_sidebar')): ?>
<div class="main-sidebar">
	<?php dynamic_sidebar('mango_sidebar'); ?>
</div>
<?php endif; ?>