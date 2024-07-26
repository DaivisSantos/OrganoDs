import React from 'react';
import Colaborador from '../Colaborador/'
import IColaborador from '../Shared/Interface';
import './Time.css';

interface TimeProps {
    nome: string;
    corPrimaria: string;
    corSecundaria: string;
    colaboradores: IColaborador[];
}

const Time = ({ corPrimaria, corSecundaria, nome, colaboradores }: TimeProps) => {
    const css = { backgroundColor: corSecundaria };

    return (
        (colaboradores.length > 0) ? (
            <section className='time' style={css}>
                <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map(colaborador => (
                        <Colaborador
                            key={colaborador.nome}
                            corDeFundo={corPrimaria} 
                            nome={colaborador.nome}
                            cargo={colaborador.cargo}
                            imagem={colaborador.imagem}
                        />
                    ))}
                </div>
            </section>
        ) : <></>
    );
};

export default Time;
