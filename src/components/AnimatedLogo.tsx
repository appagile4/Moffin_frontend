import { StyleSheet, View } from "react-native";
import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Stop,
} from "react-native-svg";

const AnimatedLogo = () => {
  // =========================================================
  // 1. LEFT PILLAR
  // =========================================================
  const path1 = `
    M 8 4
    C 5 4, 2 6, 2 11
    L 2 145
    A 29 29 0 0 0 60 145
    L 60 62
    L 16 8
    C 13 5, 10 4, 8 4
    Z
  `;

  // =========================================================
  // 2. DIAGONAL RIBBON
  // =========================================================
  const path2 = `
    M 1 76
    L 1 18

    C 1 -8, 9 -26, 27 -34
    C 41 -42, 58 -43, 74 -39
    C 88 -36, 100 -27, 112 -15

    L 243 115

    C 251 122, 253 129, 253 140
    L 253 283

    C 253 299, 258 311, 268 320
    C 270 320, 278 326, 290 333

    C 280 332, 272 328, 263 322
    C 253 316, 245 308, 238 300

    L 30 77

    C 24 72, 17 71, 10 73
    C 6 74, 3 75, 1 76

    Z
  `;

  // =========================================================
  // 3. WALLET BODY
  // =========================================================
  const path3 = `
M58 31C67 33 76 35 96 35 135 32 215 18 267 17 293 16 302 33 302 43L302 214C302 238 286 253 263 253L118 253C90 253 72 238 72 212L72 82C72 55 65 33 50 27Z`; // =========================================================
  // 4. LOWER CARD / BILL
  // =========================================================
  const path4 = `
M10 78 190 15C200 13 213 19 213 29L220 68C200 67 180 69 161 72 135 75 112 79 96 81 78 84 74 85 59 86 41 88 30 87 23 87 9 86 6 83 0 81Z`;
  // 5. UPPER ROUNDED CARD
  // =========================================================
  const path5 = `
  M 9 115
  L 88 27
  C 99 15, 112 7, 125 5
  C 139 3, 150 8, 161 18
  C 171 27, 177 39, 181 52
  L 63 96
  L 9 115
  Z
`;
  // 6. WALLET CLASP + BUTTON
  // =========================================================
  const path6 = `
    M 29 12

    L 91 12

    C 95 12, 98 15, 98 19

    L 98 59

    C 98 63, 95 66, 91 66

    L 30 66

    C 18 66, 11 56, 8 45

    C 5 26, 18 12, 29 12

    Z

    M 38 27

    A 12 12 0 1 0 38 51
    A 12 12 0 1 0 38 27

    Z
  `;

  return (
    <View style={styles.container}>
      <Svg
        width={320}
        height={320}
        viewBox="0 0 500 370"
        preserveAspectRatio="xMidYMid meet"
      >
        <Defs>
          {/* =================================================
              BLUE PILLAR / RIBBON GRADIENT
          ================================================= */}
          <LinearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <Stop offset="0%" stopColor="#38BDF8" />
            <Stop offset="40%" stopColor="#2563EB" />
            <Stop offset="100%" stopColor="#1D4ED8" />
          </LinearGradient>

          {/* =================================================
              WALLET BODY GRADIENT
          ================================================= */}
          <LinearGradient
            id="walletGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#0B1E48" />
            <Stop offset="60%" stopColor="#071533" />
            <Stop offset="100%" stopColor="#020817" />
          </LinearGradient>

          {/* =================================================
              LOWER CARD GRADIENT
          ================================================= */}
          <LinearGradient
            id="cardGradient1"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#2563EB" />
            <Stop offset="100%" stopColor="#0284C7" />
          </LinearGradient>

          {/* =================================================
              UPPER CARD GRADIENT
          ================================================= */}
          <LinearGradient
            id="cardGradient2"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#38BDF8" />
            <Stop offset="100%" stopColor="#0EA5E9" />
          </LinearGradient>

          {/* =================================================
              CLASP GRADIENT
          ================================================= */}
          <LinearGradient
            id="claspGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <Stop offset="0%" stopColor="#38BDF8" />
            <Stop offset="100%" stopColor="#1D4ED8" />
          </LinearGradient>
        </Defs>

        {/* =====================================================
            1. LEFT PILLAR
            Behind ribbon
        ====================================================== */}
        <G transform="scale(2)">
          <Path d={path1} fill="#1952C2" />
        </G>

        {/* =====================================================
            2. UPPER CARD
            Behind ribbon + wallet
        ====================================================== */}
        <G transform="translate(238, -19)">
          <Path d={path5} fill="url(#cardGradient2)" />
        </G>

        {/* =====================================================
            3. LOWER CARD
            Behind ribbon + wallet
        ====================================================== */}
        <G transform="translate(240, 23)">
          <Path d={path4} fill="url(#cardGradient1)" />
        </G>

        {/* =====================================================
            4. DIAGONAL RIBBON
            In front of cards, behind wallet
        ====================================================== */}
        <G transform="translate(3, 0)">
          <Path d={path2} fill="#2563EB" />
        </G>

        {/* =====================================================
            5. WALLET BODY
            IMPORTANT:
            Wallet is in front of ribbon and cards
        ====================================================== */}
        <G transform="translate(184, 80)">
          <Path d={path3} fill="url(#walletGradient)" />
        </G>

        {/* =====================================================
            6. WALLET CLASP
            On top of wallet
        ====================================================== */}
        <G transform="translate(399, 215)">
          <Path d={path6} fill="url(#claspGradient)" fillRule="evenodd" />

          <Circle cx={38} cy={39} r={9} fill="#FFFFFF" />
        </G>
      </Svg>
    </View>
  );
};

export default AnimatedLogo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fffff",
  },
});
