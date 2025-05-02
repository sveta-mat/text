
import "./ProductTwo.css"

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductTwo.css';

function ProductTwo() {
  return (
    <div className="product-container">
         <div className="back-button">
        <Link to="/">Վերադառնալ գլխավոր էջ</Link>
      </div>
      <h1>Կալիումի յոդիդ (KI)</h1>
      <div className="image-container">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Chlorid_draseln%C3%BD.JPG/274px-Chlorid_draseln%C3%BD.JPG" 
          alt="Կալիումի յոդիդի բյուրեղներ" 
        />
      </div>

      <section>
        <h2>Ընդհանուր բնութագիր</h2>
        <ul>
          <li>Քիմիական բանաձև: KI</li>
          <li>Արտաքին տեսք: Սպիտակ բյուրեղային փոշի կամ հաբեր</li>
          <li>Լուծելիություն: Լավ լուծվում է ջրում</li>
          <li>Համ: Թեթևակի աղի-մետաղական</li>
          <li>Հիմնական հատկություն: Մատակարարում է օրգանիզմին յոդ՝ հատկապես վահանաձև գեղձի առողջության համար</li>
        </ul>
      </section>

      <section>
        <h2>Բուժական ազդեցություններ</h2>
        <p>Պաշտպանում է ռադիացիայից՝ բեռնելով վահանաձև գեղձը "լավ" յոդով և կանխելով ռադիոակտիվ յոդի կլանումը։</p>
        <p>Օգնում է մաշկի սնկային վարակների դեմ։</p>
        <p>Օգտագործվում է աղի յոդացման մեջ՝ կանխելու յոդի պակասը։</p>
      </section>

      <section>
        <h2>Կիրառման եղանակներ բժշկության մեջ</h2>
        <table>
          <thead>
            <tr>
              <th>Կիրառություն</th>
              <th>Նկարագրություն</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Վահանաձև գեղձի հիվանդություններ</td>
              <td>Օգնում է կանխել հիպոթիրեոզը (յոդի պակասից)</td>
            </tr>
            <tr>
              <td>Ռադիոակտիվ յոդի ազդեցության կանխում</td>
              <td>Պաշտպանում է վահանաձև գեղձը</td>
            </tr>
            <tr>
              <td>Յոդի լրացում</td>
              <td>Քրոնիկ պակասի դեպքում</td>
            </tr>
            <tr>
              <td>Մակարդակային հակասեպտիկ</td>
              <td>Մանրէազերծում որոշ դեպքերում</td>
            </tr>
            <tr>
              <td>Էքսպեկտորանտ</td>
              <td>Օգնում է խորխի դուրսբերմանը</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>Զգուշացում</h2>
        <ul>
          <li>Գերդեղաչափումը կարող է առաջացնել հիպերթիրեոզ։</li>
          <li>Հնարավոր են ալերգիկ ռեակցիաներ։</li>
          <li>Օգտագործել միայն բժշկի ցուցումով։</li>
        </ul>
      </section>

      <section>
        <h2>Կալիումի յոդիդ պարունակող դեղամիջոցներ</h2>
        <ol>
          <li>Potassium Iodide Tablets (KI)</li>
          <li>Lugol’s Solution (Լյուգոլի լուծույթ)</li>
          <li>Iodoral (Սննդային հավելում)</li>
        </ol>
      </section>

     
    </div>
  );
}

export default ProductTwo;
