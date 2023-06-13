<script setup>
import Header from "@/components/Header.vue"

import Card from 'primevue/card';

</script>

<template>
    <Header></Header>
    <div class="base">
        <div class="container page-content">
            <div class="page-news">
                <div class="news-contaier">
                    <Card>
                        <template #title> Hunde-Tips: </template>
                        <template #content>
                            <p>
                                Wenn Sie einen Hund haben oder planen, einen Hund zu adoptieren, sollten Sie darauf achten,
                                dass Sie ihm ausreichend Bewegung und Spielzeit bieten. Hunde brauchen regelmäßige
                                körperliche Aktivität, um gesund und glücklich zu bleiben. Planen Sie tägliche Spaziergänge
                                oder Spielzeiten im Park ein, um sicherzustellen, dass Ihr Hund genügend Bewegung bekommt.
                                Dies stärkt nicht nur seine körperliche Fitness, sondern fördert auch die Bindung zwischen
                                Ihnen und Ihrem pelzigen Freund.
                            </p>
                        </template>
                        <template #footer>
                            <div class="footer-read-more">
                                <a href="javascript:void(0)">Read more...</a>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="news-contaier">
                    <Card>
                        <template #title> Neuigkeiten: </template>
                        <template #content>
                            <p>
                                In den letzten Monaten hat der anhaltende Konflikt in der Ukraine tragische Auswirkungen auf
                                die Tierwelt gehabt. Insbesondere viele Hunde sind aufgrund der unsicheren Situation und der
                                schwierigen Lebensbedingungen auf der Straße gelandet. Diese Hunde haben unglaubliches
                                Durchhaltevermögen gezeigt und sind auf der Suche nach einem liebevollen Zuhause.
                            </p>
                            <br>
                            <p>
                                Glücklicherweise haben engagierte Tierschutzorganisationen und Tierliebhaber in Deutschland
                                reagiert und begonnen, Hunde aus der Ukraine zu adoptieren und ihnen ein neues Leben zu
                                schenken. Die Hunde erhalten die notwendige medizinische Versorgung, werden aufgepäppelt und
                                in liebevolle Familien vermittelt.
                            </p>
                            <br>
                            <p>
                                Indem Sie einem dieser Hunde ein Zuhause geben, leisten Sie nicht nur einen wertvollen
                                Beitrag zur Rettung eines Lebewesens, sondern Sie bereichern auch Ihr eigenes Leben. Diese
                                Hunde sind oft äußerst dankbar und entwickeln eine starke Bindung zu ihren neuen Besitzern.
                                Es ist eine wunderbare Möglichkeit, ein Zeichen der Solidarität zu setzen und gleichzeitig
                                einem treuen Begleiter eine zweite Chance zu geben.
                            </p>
                            <br>
                            <p>
                                Wenn Sie daran interessiert sind, einen Hund aus der Ukraine zu adoptieren, wenden Sie sich
                                an eine Tierschutzorganisation oder ein Tierheim in Ihrer Nähe. Dort erhalten Sie weitere
                                Informationen und können mehr über die verfügbaren Hunde erfahren. Gemeinsam können wir dazu
                                beitragen, das Leben dieser Hunde positiv zu verändern und ihnen die Liebe und Geborgenheit
                                zu geben, die sie verdienen.
                            </p>
                        </template>
                        <template #footer>
                            <div class="footer-read-more">
                                <a href="javascript:void(0)">Read more...</a>
                            </div>
                        </template>
                    </Card>
                </div>
                <div class="news-contaier">
                    <Card>
                        <template #title>Haustier des Monats: </template>
                        <template #content>
                            <div class="pet-card">
                                <img src="https://placedog.net/800/500" alt="Bild des Haustiers" class="dog-image" />
                                <h3>Max, der verspielte Labrador</h3>
                                <p>
                                    Max ist ein liebenswerter Labrador im Alter von 2 Jahren, der nach einem fürsorglichen
                                    Zuhause sucht. Er ist ein energiegeladener und freundlicher Hund, der es liebt, lange
                                    Spaziergänge zu machen und mit einem Tennisball zu spielen.
                                </p>
                                <br>
                                <p>
                                    Max ist bereits stubenrein und kennt einige Grundkommandos. Er versteht sich gut mit
                                    anderen Hunden und ist auch kinderfreundlich. Max ist der perfekte Begleiter für aktive
                                    Menschen oder Familien, die einen treuen und fröhlichen Vierbeiner suchen.
                                </p>
                                <br>
                                <p>
                                    Wenn Sie sich in Max verliebt haben und ihm ein liebevolles Zuhause bieten möchten,
                                    zögern Sie nicht, uns zu kontaktieren. Max wartet sehnsüchtig darauf, seinen Lebensweg
                                    mit Ihnen zu teilen und unzählige glückliche Momente zu erleben.
                                </p>
                            </div>
                        </template>
                        <template #footer>
                            <div class="footer-read-more">
                                <a href="javascript:void(0)">Mehr Informationen</a>
                            </div>
                        </template>
                    </Card>
                </div>
            </div>
            <div class="page-patchnotes">
                <Card>
                    <template #title> Hier könnte Ihre Werbung stehen! </template>
                    <template #content>
                        <p>
                            Nein wirklich, hier könnte Ihre Werbung stehen! Möchten Sie, dass Ihre Werbung hier erscheint?
                            Es ist absolut möglich, dass Ihre Werbung an dieser Stelle platziert wird. Zögern Sie nicht,
                            sich bei uns zu melden, damit Ihre Werbung hier präsentiert werden kann. Verpassen Sie nicht
                            diese einzigartige Gelegenheit, Ihre Botschaft einer breiten Zielgruppe zu präsentieren.
                            Kontaktieren Sie uns noch heute und sichern Sie sich Ihren Werbeplatz an dieser exklusiven
                            Stelle! Verschwenden Sie keine Zeit mehr! Nutzen Sie die Chance und platzieren Sie Ihre Werbung
                            genau hier, an diesem auffälligen und prominenten Ort. Stellen Sie sicher, dass Ihre Botschaft
                            von Tausenden von potenziellen Kunden gesehen wird. Greifen Sie jetzt zum Telefon oder senden
                            Sie uns eine E-Mail, um Ihren Werbeplatz zu sichern. Warten Sie nicht länger, denn diese
                            Gelegenheit kommt so schnell nicht wieder. Ihre Konkurrenz schläft nicht – handeln Sie jetzt und
                            lassen Sie Ihre Werbung hier erstrahlen!
                            <br><br>
                            Danke :D
                        </p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.base {
    height: 100%;
    display: flex;
    position: relative;
    align-items: center;
    background-color: #d7d7d7;

    .page-content {
        position: relative;
        height: calc(100% + 200px);
        min-height: 85%;
        display: flex;
        margin: 40px;
        justify-content: space-between;

        .page-news {
            display: flex;
            flex-direction: column;
            width: 68%;
            justify-content: space-around;

            .news-contaier {
                display: flex;
                width: 100%;
                
                .dog-image {
                    float: right;
                    height: 150px;
                    width: auto;
                }
            }

            .news-contaier:not(:last-child) {
                margin-bottom: 40px;
            }
        }

        .page-patchnotes {
            width: 28%;
            height: 70%;
        }

    }
}</style>