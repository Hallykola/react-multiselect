import React from 'react';
import Select from 'react-select';

const options = [
{ value:  'ACCOUNTING',label:  'ACCOUNTING'},
{ value: 'ACTUARIAL SCIENCE',label: 'ACTUARIAL SCIENCE',},
{ value: 'ADULT EDUCATION',label: 'ADULT EDUCATION',},
{ value: 'ARCHITECTURE',label: 'ARCHITECTURE',},
{ value: 'BANKING & FINANCE',label: 'BANKING & FINANCE',},
{ value: 'BIOCHEMISTRY',label: 'BIOCHEMISTRY',},
{ value: 'BIOLOGY',label: 'BIOLOGY',},
{ value: 'BIOMEDICAL ENGINEERING',label: 'BIOMEDICAL ENGINEERING',},
{ value: 'BOTANY',label: 'BOTANY',},
{ value: 'BUILDING',label: 'BUILDING',},
{ value: 'BUSINESS ADMINISTRATION',label: 'BUSINESS ADMINISTRATION',},
{ value: 'BUSINESS EDUCATION',label: 'BUSINESS EDUCATION',},
{ value: 'CELL BIOLOGY & GENETICS',label: 'CELL BIOLOGY & GENETICS',},
{ value: 'CHEMICAL ENGINEERING',label: 'CHEMICAL ENGINEERING',},
{ value: 'CHEMISTRY',label: 'CHEMISTRY',},
{ value: 'CHINESE STUDIES',label: 'CHINESE STUDIES',},
{ value: 'CHRISTIAN RELIGIOUS STUDIES',label: 'CHRISTIAN RELIGIOUS STUDIES',},
{ value: 'CIVIL ENGINEERING',label: 'CIVIL ENGINEERING',},
{ value: 'COMPUTER ENGINEERING',label: 'COMPUTER ENGINEERING',},
{ value: 'COMPUTER SCIENCE',label: 'COMPUTER SCIENCE'},
{ value: 'CREATIVE ARTS',label: 'CREATIVE ARTS'},
{ value: 'DENTISTRY',label: 'DENTISTRY'},
{ value: 'EARLY CHILDHOOD EDUCATION',label: 'EARLY CHILDHOOD EDUCATION'},
{ value: 'ECONOMICS',label: 'ECONOMICS'},
{ value: 'EDUCATION & BIOLOGY',label: 'EDUCATION & BIOLOGY'},
{ value: 'EDUCATION & CHEMISTRY',label: 'EDUCATION & CHEMISTRY'},
{ value: 'EDUCATION & CHRISTIAN RELIGIOUS STUDIES',label: 'EDUCATION & CHRISTIAN RELIGIOUS STUDIES'},
{ value: 'EDUCATION & ECONOMICS',label: 'EDUCATION & ECONOMICS'},
{ value: 'EDUCATION & ENGLISH LANGUAGE',label: 'EDUCATION & ENGLISH LANGUAGE'},
{ value: 'EDUCATION & FRENCH',label: 'EDUCATION & FRENCH'},
{ value: 'EDUCATION & GEOGRAPHY',label: 'EDUCATION & GEOGRAPHY'},
{ value: 'EDUCATION & HISTORY',label: 'EDUCATION & HISTORY'},
{ value: 'EDUCATION & IGBO',label: 'EDUCATION & IGBO'},
{ value: 'EDUCATION & INTEGRATED SCIENCE',label: 'EDUCATION & INTEGRATED SCIENCE'},
{ value: 'EDUCATION & ISLAMIC STUDIES',label: 'EDUCATION & ISLAMIC STUDIES',},
{ value: 'EDUCATION & MATHEMATICS',label: 'EDUCATION & MATHEMATICS',},
{ value: 'EDUCATION & PHYSICS',label: 'EDUCATION & PHYSICS'},
{ value: 'EDUCATION & YORUBA',label: 'EDUCATION & YORUBA'},
{ value: 'EDUCATIONAL ADMINISTRATION',label: 'EDUCATIONAL ADMINISTRATION'},
{ value: 'ELECTRICAL /ELECTRONICS ENGINEERING',label: 'ELECTRICAL /ELECTRONICS ENGINEERING'},
{ value: 'ENGLISH LANGUAGE',label: 'ENGLISH LANGUAGE'},
{ value: 'ESTATE MANAGEMENT',label: 'ESTATE MANAGEMENT'},
{ value: 'FINANCE',label: 'FINANCE'},
{ value: 'FISHERIES',label: 'FISHERIES',},
{ value: 'FISHERIES MANAGEMENT',label: 'FISHERIES MANAGEMENT'},
{ value: 'FRENCH',label: 'FRENCH'},
{ value: 'GEOGRAPHY',label: 'GEOGRAPHY'},
{ value: 'GEOLOGY',label: 'GEOLOGY'},
{ value: 'GEOPHYSICS',label: 'GEOPHYSICS'},
{ value: 'GUIDANCE & COUNSELLING',label: 'GUIDANCE & COUNSELLING'},
{ value: 'HEALTH EDUCATION',label: 'HEALTH EDUCATION'},
{ value: 'HISTORY & STRATEGIC STUDIES',label: 'HISTORY & STRATEGIC STUDIES'},
{ value: 'HOME ECONOMICS & EDUCATION',label: 'HOME ECONOMICS & EDUCATION'},
{ value: 'HUMAN KINETICS',label: 'HUMAN KINETICS'},
{ value: 'IGBO',label: 'IGBO'},
{ value: 'INDUSTRIAL CHEMISTRY',label: 'INDUSTRIAL CHEMISTRY'},
{ value: 'INDUSTRIAL MATHEMATICS',label: 'INDUSTRIAL MATHEMATICS'},
{ value: 'INDUSTRIAL RELATIONS & PERSONNEL MANAGEMENT',label: 'INDUSTRIAL RELATIONS & PERSONNEL MANAGEMENT'},
{ value: 'INDUSTRIAL RELATIONS AND PERSONNEL MANAGEMENT',label: 'INDUSTRIAL RELATIONS AND PERSONNEL MANAGEMENT'},
{ value: 'INSURANCE',label: 'INSURANCE'},
{ value: 'ISLAMIC STUDIES',label: 'ISLAMIC STUDIES'},
{ value: 'LAW',label: 'LAW'},
{ value: 'LINGUISTICS, IGBO AND OTHER AFRICAN LANGUAGES',label: 'LINGUISTICS, IGBO AND OTHER AFRICAN LANGUAGES'},
{ value: 'MARINE BIOLOGY',label: 'MARINE BIOLOGY'},
{ value: 'MASS COMMUNICATION',label: 'MASS COMMUNICATION'},
{ value: 'MATHEMATICS',label: 'MATHEMATICS'},
{ value: 'MECHANICAL ENGINEERING',label: 'MECHANICAL ENGINEERING'},
{ value: 'MEDICAL LABORATORY SCIENCE',label: 'MEDICAL LABORATORY SCIENCE'},
{ value: 'MEDICINE & SURGERY',label: 'MEDICINE & SURGERY'},
{ value: 'METALLURGICAL & MATERIALS ENGINEERING',label: 'METALLURGICAL & MATERIALS ENGINEERING'},
{ value: 'METEOROLOGY & CLIMATE SCIENCE',label: 'METEOROLOGY & CLIMATE SCIENCE'},
{ value: 'MICROBIOLOGY',label: 'MICROBIOLOGY'},
{ value: 'NURSING SCIENCE',label: 'NURSING SCIENCE'},
{ value: 'PETROLEUM & GAS ENGINEERING',label: 'PETROLEUM & GAS ENGINEERING'},
{ value: 'PHARMACOLOGY',label: 'PHARMACOLOGY'},
{ value: 'PHARMACY',label: 'PHARMACY'},
{ value: 'PHILOSOPHY',label: 'PHILOSOPHY'},
{ value: 'PHYSICS',label: 'PHYSICS'},
{ value: 'PHYSIOLOGY',label: 'PHYSIOLOGY'},
{ value: 'PHYSIOTHERAPY',label: 'PHYSIOTHERAPY'},
{ value: 'POLITICAL SCIENCE',label: 'POLITICAL SCIENCE'},
{ value: 'PSYCHOLOGY',label: 'PSYCHOLOGY'},
{ value: 'QUANTITY SURVEYING',label: 'QUANTITY SURVEYING'},
{ value: 'RADIOGRAPHY',label: 'RADIOGRAPHY'},
{ value: 'RUSSIAN',label: 'RUSSIAN'},
{ value: 'RUSSIAN WITH FRENCH/GERMAN',label: 'RUSSIAN WITH FRENCH/GERMAN'},
{ value: 'SOCIAL WORK',label: 'SOCIAL WORK'},
{ value: 'SOCIOLOGY',label: 'SOCIOLOGY'},
{ value: 'STATISTICS',label: 'STATISTICS'},
{ value: 'SURVEYING & GEOINFORMATICS',label: 'SURVEYING & GEOINFORMATICS'},
{ value: 'SYSTEMS ENGINEERING',label: 'SYSTEMS ENGINEERING'},
{ value: 'TEACHER EDUCATION SCIENCE',label: 'TEACHER EDUCATION SCIENCE'},
{ value: 'TECHNICAL EDUCATION',label: 'TECHNICAL EDUCATION'},
{ value: 'URBAN & REGIONAL PLANNING',label: 'URBAN & REGIONAL PLANNING'},
{ value: 'YORUBA',label: 'YORUBA'},
{ value: 'ZOOLOGY',label: 'ZOOLOGY'},
];

class Multiselect extends React.Component {
  state = {
    selectedOption: null
    // {value:'test', label:'Test'},
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption }, () =>
      console.log(`Option selected:`, this.state.selectedOption)
    );
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        isMulti={true}
        isSearchable={true}
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

export default Multiselect;
// exports.default= Multiselect;