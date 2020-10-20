import Axios from "axios";
import PropTypes from "prop-types";

import { withTranslation, i18n } from "../i18n";

function Home({ t }) {
  const sendMail = (e) => {
    e.preventDefault();
    let result = Axios.post("/api/email");
    console.log(result);
    console.log(i18n.language);
  };

  return (
    <div>
      <main>{t("hi")}</main>
      <button type="button" onClick={sendMail}>
        Gönder
      </button>
    </div>
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ["common"],
});

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation("common")(Home);
