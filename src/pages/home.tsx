import { Button, Card, Carousel, CardGroup } from "react-bootstrap";
import pessoaIcon from "../assets/pessoaIcon.png";
import iconePessoa from "../assets/iconePessoa.png";
import casalIcon from "../assets/casalIcon.png"
import familiaIcon from "../assets/iconeFamilia.png"

export default function HomePage () {
    return (
        <div className="divTotalHome">
            <div className="tituloHome">
                <h1 style={{textAlign: "center"}}> Bem vindo ao Atlantis! </h1>
                <h5 style={{marginTop:"2%"}}> O melhor sistema de gerenciamento de resorts e locações</h5>
                <Button size="lg"> Realize sua reserva! </Button>
                <h6 style={{marginTop: "3%"}}> ou </h6>
            </div>
            <div className="locacoesHome">
                <h4> Conheça nossos tipos de locações: </h4>
                <CardGroup>
                    <Card className="custom-card">
                        <Card.Img variant="top" src={iconePessoa} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação solteiro simples</Card.Title>
                            <Card.Text>
                                Ideal para quem gosta de curtir sozinho, contém uma suíte e sem garagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" className="cardimagem" src={casalIcon} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação casal simples</Card.Title>
                            <Card.Text>
                                Ideal para casais que gostam de curtir juntos, contém uma suíte, cama de casal e garagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" className="cardimagem" src={familiaIcon} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação família</Card.Title>
                            <Card.Text>
                                Ideal para famílias, contém duas camas de solteiro e uma de casal, uma suíte e garagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
                <CardGroup>
                    <Card className="custom-card">
                        <Card.Img variant="top" src={iconePessoa} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação solteiro mais</Card.Title>
                            <Card.Text>
                                Ideal para quem gosta de pagar pelo conforto, contém uma cama de casal, uma suíte e garagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" className="cardimagem" src={familiaIcon} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação família Mais</Card.Title>
                            <Card.Text>
                                Ideal para quem leva a família, contém cinco camas de solteiro, uma de casal, duas suítes e garagem.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Img variant="top" className="cardimagem" src={familiaIcon} />
                        <Card.Body>
                            <Card.Title style={{ textAlign: "center" }}>Acomodação família super</Card.Title>
                            <Card.Text>
                                Ideal para trazer a família inteira, contém seis camas de solteiro, duas de casal, três suítes e duas garagens.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </div>
    )
}