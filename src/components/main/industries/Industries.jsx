import React from 'react';
import accept from '../../../images/accept.svg'

const Industries = () => {
    return (
        <section className="industries">
            <div className="industries__container _container">
                <div className="industries__items">
                    <div className="industries__column">
                        <div className="industries__item item-industries">
                            <div className="industries-icon-title">
                                <div className="item-industries__icon">
                                    <img className="icon-title" src={accept} alt=""/>
                                </div>
                                <div className="item-industries__title">Для бизнеса</div>
                            </div>
                            <div className="item-industries__text">Создаем кастомизированные программы и сервисы для
                                развития управленческих команд в российских и международных компаниях
                            </div>
                        </div>
                    </div>
                    <div className="industries__column">
                        <div className="industries__item item-industries">
                            <div className="industries-icon-title">
                                <div className="item-industries__icon">
                                    <img className="icon-title" src={accept} alt=""/>
                                </div>
                                <div className="item-industries__title">Для колл-центров</div>
                            </div>
                            <div className="item-industries__text">Помогаем руководителям и командам колл-центров
                                создать полный цикл по поддержке клиентов и организовать контроль качества
                            </div>
                        </div>
                    </div>
                    <div className="industries__column">
                        <div className="industries__item item-industries">
                            <div className="industries-icon-title">
                                <div className="item-industries__icon">
                                    <img className="icon-title" src={accept} alt=""/>
                                </div>
                                <div className="item-industries__title">Облачные хранилища</div>
                            </div>
                            <div className="item-industries__text">Разрабатываем локальные защищенные
                                корпоративные хранилища, а также осуществляем поддержку на протяжении всего времени
                                пользования
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Industries;