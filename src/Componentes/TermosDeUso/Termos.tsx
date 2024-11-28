import React from 'react';
import './termosDeUso.css';

function TermosDeUso() {
    return (
        <div className="termos-container">
            <h1>Termos de Uso</h1>
            <p>
                Bem-vindo à Cade Circular UFJF. Ao utilizar nossos serviços, você concorda com os seguintes termos e condições:
            </p>
            <ul>
                <li>Você deve usar o aplicativo apenas para fins lícitos e respeitar todas as leis aplicáveis.</li>
                <li>Não é permitido copiar, modificar ou redistribuir qualquer conteúdo sem autorização prévia.</li>
                <li>As informações fornecidas no aplicativo são de caráter informativo e podem estar sujeitas a alterações.</li>
                <li>Não nos responsabilizamos por qualquer dano causado pelo uso indevido do aplicativo.</li>
            </ul>
            <p>
                Para dúvidas ou esclarecimentos, entre em contato com nossa equipe de suporte.
            </p>
            <button onClick={() => window.history.back()} className="voltar-button">Voltar</button>
        </div>
    );
}

export default TermosDeUso;