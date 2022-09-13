import "./../css/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<main>
				<section class="trial">
					<div class="trial__container--flex">
						<div class="trial-text">
							<h1>R$ 0,00 por 3 meses de Premium</h1>
							<h4>
								Curta músicas sem anúncios, ouça no modo offline e muito mais.
								Cancele quando quiser.
							</h4>
							<button class="btn btn-dark">APROVEITE 3 MESES GRATIS</button>
							<button class="btn btn-primary btn-planos">VER PLANOS</button>
							<p>
								Somente no plano Individual. Depois, é só R$ 19,90/mês. Sujeito
								a Termos e Condições. Disponível apenas para quem nunca usou o
								Premium. Oferta válida até 11 de setembro de 2022.
							</p>
						</div>
						<div class="trial__container--image">
							<img
								class="trial__img"
								src="assets/img/t1.jpg"
								alt="Trial panel image"
							/>
						</div>
					</div>
				</section>

				<section class="premium">
					<h2>Por que ser Premium?</h2>
					<div class="premium__container--flex">
						<div class="card">
							<img src="assets/img/p1.png" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Modo offline.</h5>
								<p class="card-text">Ouça música onde estiver.</p>
							</div>
						</div>
						<div class="card">
							<img src="assets/img/p2.png" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Ouça músicas sem anúncios.</h5>
								<p class="card-text">Curta música, sem parar.</p>
							</div>
						</div>
						<div class="card">
							<img src="assets/img/p3.png" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Ouça o que quiser.</h5>
								<p class="card-text">Mesmo no celular ou tablet.</p>
							</div>
						</div>
						<div class="card">
							<img src="assets/img/p4.png" class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Troque de música o quanto quiser.</h5>
								<p class="card-text">Pule quando quiser.</p>
							</div>
						</div>
					</div>
				</section>

				<section class="planos planos__container">
					<h2>Escolha seu plano Premium</h2>
					<p>
						Ouça sem limites no seu celular, alto-falante e em outros
						dispositivos.
					</p>
					<div class="planos__container--flex">
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Individual</h5>
								<p class="card-text">R$ 19,90/mês após o período da oferta</p>
								<div class="planos__line"></div>
								<ul class="planos__list">
									<li>Ouça músicas sem anúncios</li>
									<li>Ouça em qualquer lugar — até no modo offline</li>
									<li>Escolha a música que quer ouvir</li>
									<li>Faça um plano pré-pago ou uma assinatura</li>
								</ul>
								<a href="#" class="btn btn-dark">
									Começar
								</a>
								<p class="planos__paragraph--mini">
									Somente no plano Individual. Depois, é só R$ 19,90/mês.
									Sujeito a Termos e Condições. Disponível apenas para quem
									nunca usou o Premium. A oferta termina em 11/09/2022.
								</p>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Duo</h5>
								<p class="card-text">R$ 24,90/mês após o período da oferta</p>
								<div class="planos__line"></div>
								<ul class="planos__list">
									<li>2 contas Premium para um casal que mora junto</li>
									<li>Ouça sem anúncios, no modo offline e sob demanda</li>
									<li>Faça um plano pré-pago ou uma assinatura</li>
								</ul>
								<a href="#" class="btn btn-dark">
									Começar
								</a>
								<p class="planos__paragraph--mini">
									Sujeito a Termos e Condições. O mês grátis não está disponível
									para usuários que já experimentaram o Premium.
								</p>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Família R$ 34,90/m</h5>
								<p class="card-text">R$ 34,90/mês após o período da oferta</p>
								<div class="planos__line"></div>
								<ul class="planos__list">
									<li>
										6 contas Premium para familiares que moram no mesmo endereço
									</li>
									<li>Bloqueie músicas com conteúdo explícito</li>
									<li>Ouça sem anúncios, no modo offline e sob demanda</li>
									<li>
										Spotify Kids: um aplicativo separado, feito especialmente
										para crianças
									</li>
									<li>Faça um plano pré-pago ou uma assinatura</li>
								</ul>
								<a href="#" class="btn btn-dark">
									Começar
								</a>
								<p class="planos__paragraph--mini">
									Sujeito a Termos e Condições. O mês grátis não está disponível
									para usuários que já experimentaram o Premium.
								</p>
							</div>
						</div>
						<div class="card">
							<div class="card-body">
								<h5 class="card-title">Universitário</h5>
								<p class="card-text">R$ 9,90/mês após o período da oferta</p>
								<div class="planos__line"></div>
								<ul class="planos__list">
									<li>
										Desconto especial para estudantes universitários que tenham
										direito à oferta
									</li>
									<li>Ouça músicas sem anúncios</li>
									<li>Ouça em qualquer lugar — até no modo offline</li>
									<li>Escolha a música que quer ouvir</li>
								</ul>
								<a href="#" class="btn btn-dark">
									Começar
								</a>
								<p class="planos__paragraph--mini">
									Oferta disponível somente para estudantes de instituições de
									ensino superior aprovadas. Depois, é só R$ 9,90/mês. Oferta
									não disponível para quem já usou o Premium. Sujeito a Termos e
									Condições da oferta de desconto no plano Universitário do
									Spotify. A oferta termina em 11/09/2022.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
