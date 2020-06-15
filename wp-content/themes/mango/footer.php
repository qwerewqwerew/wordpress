<?php
/**
 * footer.php - 사이트의 공통 부분 중 푸터 부분을 담당하는 템플릿
 *
 * @package theme-mango
 */
?>
      </div><!-- .main-content -->
      <!-- 사이드바 -->
      <?php get_sidebar(); ?>
      <!-- /사이드바 -->

    </div><!-- .wrapper-inner -->

    <footer>
      <div class="footer-inner">
        <h4 class="footer-co-name">망고개발자</h4>

        <a href="#" title="오시는 길">
          <address>망고는개발자</address>
        </a>

        <div class="footer-copyright">
          © 2020 mango dev. </div><!-- .footer-copyright -->
      </div><!-- .footer-inner -->
    </footer>
  </div><!-- .wrapper -->
  <?php wp_footer(); ?>
</body>
</html>