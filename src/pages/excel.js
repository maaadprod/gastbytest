import React from "react"
import { graphql } from "gatsby";

const styles = {
  basicTd: { color: "#47525E", fontSize: 16 },
  basicTd2: { color: "#47525E", fontSize:11},
  firstCaja: { color: "#47525E", fontSize:11 },
  firstStrong: { color: "#47525E", fontSize:14 },
  firstTd: { color: "#47525E", fontSize:11},
  table: {border: "1px solid #C0CCDA",borderSpacing: 0},
  th: {color: "#47525E", fontSize: 13, borderBottom: "1px solid #C0CCDA"},
};
const ExcelPage = ({ data }) => (<table
  width="100%"
  cellpadding="10"
  style={styles.table}
>
  <thead bgcolor="EFF2F7" colpadding="5px">
    <th
      align="left"
      width="350"
      style={styles.th}
    >
      Incidencia de pedido
    </th>
    <th

    style={styles.th}
    >
      Fecha de pedido
    </th>
    <th

    style={styles.th}
    >
      Unidades afectadas
    </th>
    <th
      width="137"

      style={styles.th}
    >
      Importe<br />unitario (€)
    </th>
    <th
      width="137"

      style={styles.th}
    >
      Importe total (€)
    </th>
    <th
      width="137"

      style={styles.th}
    >
      Tipo de<br />cambio
    </th>
    <th
      width="137"

      style={styles.th}
    >
      Importe total ($)
    </th>
  </thead>
  <tbody>
   { data.allGeneradorXlsxDatosParaHtml.nodes.map((element, index) => (
    <React.Fragment>
    <tr key={index}>
      <td>
        <span style={styles.firstTd}>{element.CADENA}</span><br />
        <strong style={styles.firstStrong}
          >PO#: {element.PO_NUMBER} - Tu factura: -</strong
        ><br />
        <span style={styles.firstCaja}
          >{element.MC} {element.TIPO_INCIDENCIA}</span
        >
      </td>
      <td align="center">
        <span style={styles.basicTd}>-</span>
      </td>
      <td align="center">
        <span style={styles.basicTd}>{element.AFECTADAS}</span>
      </td>
      <td align="center">
        <span style={styles.basicTd}>- €</span>
      </td>
      <td align="center">
        <span style={styles.basicTd}>- €</span>
      </td>
      <td align="center">
        <span style={styles.basicTd}>-</span><br />
        <span style={styles.basicTd2}>-</span
        ><br />
      </td>
      <td align="center">
        <span style={styles.basicTd}>20,60 $</span>
      </td>
    </tr>

    <tr>
      <td colspan="7">
        <table width="100%" style={{ borderSpacing: "0px" }}>
          <tbody>
            <tr>
              <td bgcolor="#DCE3EA"></td>
            </tr>
            <tr>
              <td height="10"></td>
            </tr>
            <tr>
              <td style={{ color: "#47525E", fontSize: "12px"}}>-
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    </React.Fragment>)) }
  </tbody>
</table>
)

export default ExcelPage;

export const query = graphql`
  query MyQuery {
    allGeneradorXlsxDatosParaHtml {
      nodes {
        CADENA
        PO_NUMBER
        MC
        TIPO_INCIDENCIA
        AFECTADAS
      }
    }
  }
`;
