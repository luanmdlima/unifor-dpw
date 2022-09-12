import "./../css/Header.css";

export default function Header() {
	return (
		<>
			<header>
				<nav class="navbar navbar-expand-lg bg-dark">
					<div class="container-fluid">
						<a class="navbar-brand" href="#">
							Spotify
						</a>
						<button
							class="navbar-toggler"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span class="navbar-toggler-icon"></span>
						</button>
						<div class="collapse navbar-collapse" id="navbarNav">
							<ul class="navbar-nav">
								<li class="nav-item">
									<a class="nav-link" aria-current="page" href="#">
										Premium
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="./suporte.html">
										Suporte
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										|
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="./cadastro.html">
										Inscrever-se
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" href="#">
										Entrar
									</a>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
