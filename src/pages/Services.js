import * as React from "react";

import ServicesCard from "../components/ServicesCard"

export default function RowAndColumnSpacing() {
  return (
      <div style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 80
      }}>
        <ServicesCard
          title={"Phone Flashing"}
          image={
            "https://android.imyfone.com/images/android-issues/universal-mobile-phone-flashing-software-free-download.png"
          }
        />
        <ServicesCard
          title={"Password Removal"}
          image={
            "https://www.smu.edu/-/media/Site/OIT/Services_Icons/OIT-Icon-password-1x1.png"
          }
        />
        <ServicesCard
          title={"Mkopa and DLight Removal"}
          image={
            "data:image/png;base64,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"
          }
        />
        <ServicesCard
          title={"Phone Softwares Repair"}
          image={
            "https://cdn.educba.com/academy/wp-content/uploads/2019/12/Mobile-Application-Software.jpg"
          }
        />
        <ServicesCard
          title={"Laptop Softwares Repair"}
          image={
            "https://educationcity.in/wp-content/uploads/2021/08/List-of-Microsoft-Popular-Software.jpg"
          }
        />
        <ServicesCard
          title={"PC Quenine Softwares"}
          image={
            "https://mobile-pc-medics.com/wp-content/uploads/2020/08/windows-computer-repair-services.jpg"
          }
        />
      </div>

  );
}
