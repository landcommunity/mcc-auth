const fragment = new URLSearchParams(window.location.hash.slice(1));
const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

document.getElementById("codeContainer").value = `/auth ${btoa(tokenType + " " + accessToken)}`;

fetch('https://discord.com/api/users/@me', {
    headers: {
        authorization: `${tokenType} ${accessToken}`,
    },
})
    .then(result => result.json())
    .then(response => {
        const { username, discriminator } = response;
        const pfp = `https://cdn.discordapp.com/avatars/${response.id}/${response.avatar}.jpg`
        
        document.getElementById("pfp").src = pfp;
        document.getElementById("username").innerText = username;
        document.getElementById("discrim").innerHTML = discriminator;

        document.querySelector(".account").style.display = "block";
    })
    .catch(console.error);