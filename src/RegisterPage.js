import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axiosInstance from "./utils/axiosInstance";

// Assets
import logo from "./assets/alcher-logo2.svg";
import headerImage from "./assets/group-dance.svg";
import guidelinesFrame from "./assets/guidelines-frame.svg";
import bgPattern from "./assets/background-pattern.svg";
import RegisterIcon from "./assets/register-icon.svg";

const RegisterPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [competition, setCompetition] = useState(null);

  const [formData, setFormData] = useState({
    teamVideo: "",
    description: "",
  });

  const [teamMembers, setTeamMembers] = useState([]);
  const [availableMembers, setAvailableMembers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [guidelinesOpen, setGuidelinesOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openindex, setOpenindex] = useState([]);

  const handleTabClickFromDropdown = (tabIndex) => {
    setOpenindex([tabIndex]);
    console.log(tabIndex);
    navigate("/profile", { state: { tabIndex } });
  };

  useEffect(() => {
    const fetchCompetition = async () => {
      try {
        // --- 2. USE AXIOSINSTANCE ---
        const res = await axiosInstance.get(`/api/competitions/${id}/`);
        const data = res.data; // data is directly on res.data
        // --- END OF CHANGES ---

        console.log(data);
        setCompetition(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompetition();
  }, [id]);

  const handleChange = (e) =>
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleAddMember = (member) => {
    if (!teamMembers.includes(member) && teamMembers.length < 10) {
      setTeamMembers((p) => [...p, member]);
    }
    setDropdownOpen(false);
  };

  const removeMember = (member) =>
    setTeamMembers((p) => p.filter((m) => m !== member));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const finalData = {
      competition_id: id,
      team_members: teamMembers,
      team_video: formData.teamVideo,
      description: formData.description,
    };

    try{
      const response = await axiosInstance.post(
        "/api/register-competition/",
        finalData
      );
      
      // data is on response.data
      const data = response.data; 
      // --- END OF CHANGES --

      const stored =
        JSON.parse(localStorage.getItem("registeredCompetitions") || "[]") || [];
      const newEntry = {
        id,
        team_members: teamMembers,
        comp_image_url: competition?.image,
        team_video: formData.teamVideo,
        description: formData.description,
        registered_at: new Date().toISOString(),
      };
      localStorage.setItem(
        "registeredCompetitions",
        JSON.stringify([...stored, newEntry])
      );

      navigate("/profile", { state: { tabIndex: 2 } });
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        // --- 4. USE AXIOSINSTANCE ---
        const res = await axiosInstance.get("/Participantdata/Participant/");
        const data = res.data;
        // --- END OF CHANGES ---
        setAvailableMembers(data.map((member) => member.name));
      } catch (err) {
        console.error("Error fetching members:", err);
      }
    };

    fetchMembers();
  }, []);

  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundColor: "#151515",
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
      }}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto">
        <img src={logo} alt="logo" className="h-10 w-auto" />
        <div className="flex items-center gap-6"></div>
      </div>

      {/* Header Image */}
      <div className="flex justify-center">
        <div className="relative w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] max-w-screen-xl">
          <img
            src={headerImage}
            alt="header"
            className="w-full h-56 sm:h-64 md:h-72 object-cover object-top"
          />
        </div>
      </div>

      {/* Cream Section */}
      <div className="bg-[#FFF8E7] text-black flex justify-center pb-10 sm:pb-12 md:pb-20 -mt-[1px] mx-auto w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-6rem)] max-w-screen-xl">
        <div className="w-full px-6 py-8 md:px-10 lg:px-14 relative">
          <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
            <div>
              <h2 className="text-4xl font-bold flex items-center gap-2">
                {competition?.event_name || "Loading..."}
              </h2>
              <div className="flex items-center gap-5 mt-1">
                <span className="text-sm font-semibold text-[#1c1c1c]">
                  {competition?.solo_or_group || "N/A"}
                </span>
                <span className="text-sm font-semibold text-[#1c1c1c]">
                  {competition?.event_mode === "true" ? "Online" : "Offline"}
                </span>
              </div>
            </div>

            {/* Guidelines Button */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setGuidelinesOpen(!guidelinesOpen)}
                className="w-28 h-10 bg-transparent"
              >
                <img
                  src={guidelinesFrame}
                  alt="guidelines"
                  className="w-full h-full object-contain"
                />
              </button>

              {guidelinesOpen && (
                <div
                  className="absolute right-0 top-full mt-2 bg-[#111] text-white w-72 p-4 text-sm z-40 shadow-xl border border-[#333]"
                  style={{
                    clipPath:
                      "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
                  }}
                >
                  <h3 className="text-base font-semibold mb-2 leading-snug">
                    {competition?.event_rules || "No rules provided."}
                  </h3>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="bg-[#f79b2b] hover:bg-[#f58e1f] text-black px-4 py-1.5 rounded"
                      onClick={() => setGuidelinesOpen(false)}
                    >
                      Agree
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Short Description */}
          <p className="text-sm font-sans text-black-700 mb-6 max-w-3xl">
            {competition?.event_desc}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 max-w-3xl">
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Add Members (Min 1 - Max 10)
              </label>

              <div className="flex flex-wrap gap-2 mb-2">
                {teamMembers.length === 0 && (
                  <span className="text-sm text-gray-500">
                    No members added yet
                  </span>
                )}
                {teamMembers.map((member) => (
                  <div
                    key={member}
                    className="bg-[#FFE8CF] text-sm px-3 py-1 rounded flex items-center gap-2"
                  >
                    <span className="text-[#5a3a14]">{member}</span>
                    <button
                      type="button"
                      onClick={() => removeMember(member)}
                      className="text-red-600 hover:text-red-800"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <div className="relative inline-block">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center gap-2 bg-[#f79b2b] hover:bg-[#f58e1f] text-black px-3 py-2 rounded font-medium"
                >
                  + <span className="text-sm">Add Member</span>
                </button>

                {dropdownOpen && (
                  <div className="absolute mt-2 w-64 bg-white border border-gray-200 rounded shadow-lg max-h-48 overflow-y-auto z-30">
                    {availableMembers.length === 0 && (
                      <div className="px-3 py-2 text-sm text-gray-500">
                        No members available
                      </div>
                    )}
                    {availableMembers.map((member) => (
                      <div
                        key={member.id}
                        onClick={() => handleAddMember(member)}
                        className="px-3 py-2 hover:bg-[#fffaef] cursor-pointer text-sm"
                      >
                        {member}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Previous Performance
              </label>
              <input
                type="url"
                name="teamVideo"
                value={formData.teamVideo}
                onChange={handleChange}
                placeholder="Enter Link"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#f5a24c]"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write a suitable caption explaining your performance..."
                rows="3"
                className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-[#f5a24c]"
              />
            </div>

            <p className="text-xs text-gray-500">
              Note: Our team will review your entry. Once approved, you will be
              notified via email and SMS.
            </p>

            {error && (
              <p className="text-red-500 text-sm font-medium">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex items-center justify-center"
            >
              <img
                src={RegisterIcon}
                alt="register"
                className={`h-8 w-auto inline mr-2 ${
                  loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
