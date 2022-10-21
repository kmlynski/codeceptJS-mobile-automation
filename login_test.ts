Feature("login");

Scenario("test something", ({ I }) => {
  I.waitForVisible("#com.amazon.mShop.android.shopping:id/checkBox", 10);
  I.click("#com.amazon.mShop.android.shopping:id/checkBox");
  I.click("#com.amazon.mShop.android.shopping:id/btn_redirect_marketplace");
  I.waitForVisible(
    "#com.amazon.mShop.android.shopping:id/sign_in_button",5
  );
});
